import * as vscode from 'vscode';
import * as path from 'path';
import { propertyToTypeMap } from './utils/propertyGroups';
import * as util from './utils/utils';
import * as sug from './utils/suggestions';
import * as wpDefault from './defaults/wordpressVariables';
let cachedThemeJson: any = null;
let lastModifiedTime: number = 0;

export function activate(context: vscode.ExtensionContext) {
	const provider = vscode.languages.registerCompletionItemProvider(
		['css', 'scss', 'less'],
		{
			provideCompletionItems(document, position) {

				const workspaceFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
				if (!workspaceFolder) {
					return;
				}

				const themeJsonPathFromSettings = vscode.workspace.getConfiguration('theme-json-autosuggest').get<string>('themeJsonPath', 'theme.json');
				const themeJsonPath = path.join(workspaceFolder, themeJsonPathFromSettings || 'theme.json');

				try {
					cachedThemeJson = util.loadThemeJson(themeJsonPath, lastModifiedTime);
					if (!cachedThemeJson) {
						return;
					}
				} catch {
					vscode.window.showErrorMessage(`Could not load theme.json from ${themeJsonPath}. Please check the path in settings.`);
					return;
				}

				const code = document.getText();
				const offset = document.offsetAt(position);
				const currentProp = util.getCssProp(code, offset);

				if (!currentProp) {
					return;
				}

				const range = util.getRange(document, position);
				const type = propertyToTypeMap[currentProp] ?? '';

				const theme = cachedThemeJson;
				const suggestions: vscode.CompletionItem[] = [];

				const palette = util.merge(theme.settings?.color?.palette ?? [], theme.settings?.color?.defaultPalette !== false ? wpDefault.palette : []);
				const gradients = util.merge(theme.settings?.color?.gradients ?? [], theme.settings?.color?.defaultGradients !== false ? wpDefault.gradients : []);
				const fontSizes = util.merge(theme.settings?.typography?.fontSizes ?? [], theme.settings?.typography?.defaultFontSizes !== false ? wpDefault.fontSizes : []);
				const spacing = util.merge(theme.settings?.spacing?.spacingSizes ?? [], theme.settings?.spacing?.defaultSpacingSizes !== false ? wpDefault.spacing : []);
				const shadows = util.merge(theme.settings?.shadow?.presets ?? [], theme.settings?.shadow?.defaultPresets !== false ? wpDefault.shadows : []);
				const aspectRatios = util.merge(theme.settings?.dimensions?.aspectRatios ?? [], theme.settings?.dimensions?.defaultAspectRatios !== false ? wpDefault.aspectRatios : []);

				const fontFamilies = theme.settings?.typography?.fontFamilies ?? [];
				const layoutVars = theme.settings?.layout ?? {};
				const rootPadding = theme.settings?.useRootPaddingAwareAlignments ? theme.styles?.padding : null;
				const blockGap = theme.settings?.spacing?.blockGap && theme.styles?.spacing?.blockGap ? { slug: 'block-gap', name: 'Block gap', value: theme.styles?.spacing?.blockGap } : null;

				const customVars = util.flattenVars(theme.settings?.custom ?? {});

				const typeToFn = new Map<string, () => vscode.CompletionItem[]>([
					['color', () => sug.getColor(palette, gradients, document, position, range)],
					['spacing', () => sug.getSpacing(spacing, blockGap, rootPadding, currentProp, document, position, range)],
					['fontSize', () => sug.getFontSizes(fontSizes, document, position, range)],
					['fontFamily', () => sug.getFontFamilies(fontFamilies, document, position, range)],
					['shadow', () => sug.getShadows(shadows, document, position, range)],
					['aspectRatio', () => sug.getAspectRatios(aspectRatios, document, position, range)],
					['layout', () => sug.getLayouts(layoutVars, document, position, range)],
				]);

				const suggestionFn = typeToFn.get(type);
				if (suggestionFn) { suggestions.push(...suggestionFn()); }

				suggestions.push(...sug.getCustom(customVars, document, position, range));
				return util.filterAndSort(suggestions);

			}
		},
		'-'
	);

	context.subscriptions.push(provider);

}

export function deactivate() { }
