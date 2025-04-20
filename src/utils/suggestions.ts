import * as vscode from 'vscode';
import { wrapVar } from './utils';

function createItem(
    varName: string,
    detail: string,
    doc: string | vscode.MarkdownString,
    document: vscode.TextDocument,
    position: vscode.Position,
    range?: vscode.Range,
    kind = vscode.CompletionItemKind.Variable
): vscode.CompletionItem {
    const wrap = wrapVar(document, position);
    const insertText = wrap ? `var(${varName})` : varName;

    const item = new vscode.CompletionItem(insertText, kind);
    item.label = varName;
    item.insertText = insertText;
    if (range) { item.range = range; }
    item.detail = detail;
    item.documentation = doc;
    item.sortText = (kind === vscode.CompletionItemKind.Variable && varName.startsWith('--wp--custom'))
        ? `111_custom_${varName}`
        : `000_${varName}`;

    return item;
}

export function getColor(palette: any[], gradients: any[], document: vscode.TextDocument, position: vscode.Position, range?: vscode.Range): vscode.CompletionItem[] {
    const items: vscode.CompletionItem[] = [];
    palette.forEach(color => {
        const varName = `--wp--preset--color--${color.slug}`;
        const markdown = new vscode.MarkdownString(`### ${color.name}\n${color.color}`);
        markdown.isTrusted = true;
        items.push(createItem(varName, color.color, markdown, document, position, range, vscode.CompletionItemKind.Color));
    });
    gradients.forEach(grad => {
        const varName = `--wp--preset--gradient--${grad.slug}`;
        items.push(createItem(varName, grad.name, grad.gradient, document, position, range, vscode.CompletionItemKind.Color));
    });
    return items;
}

export function getSpacing(spacing: any[], blockGap: any, padding: any, prop: string, document: vscode.TextDocument, position: vscode.Position, range?: vscode.Range): vscode.CompletionItem[] {
    const items: vscode.CompletionItem[] = [];
    spacing.forEach(s => {
        const varName = `--wp--preset--spacing--${s.slug}`;
        items.push(createItem(varName, s.name, s.value, document, position, range));
    });
    if (padding) {
        Object.entries(padding).forEach(([side, value]) => {
            const varName = `--wp--style--root--padding-${side}`;
            const label = `Root padding ${side}`;
            items.push(createItem(varName, label, value as string, document, position, range));
        });
    }
    if (blockGap) {
        const varName = `--wp--style--${blockGap.slug}`;
        items.push(createItem(varName, blockGap.name, blockGap.value, document, position, range));
    }
    return items;
}

export function getFontSizes(sizes: any[], document: vscode.TextDocument, position: vscode.Position, range?: vscode.Range): vscode.CompletionItem[] {
    return sizes.map(size => {
        const varName = `--wp--preset--font-size--${size.slug}`;
        return createItem(varName, size.size, size.size, document, position, range);
    });
}

export function getFontFamilies(families: any[], document: vscode.TextDocument, position: vscode.Position, range?: vscode.Range): vscode.CompletionItem[] {
    return families.map(f => {
        const varName = `--wp--preset--font-family--${f.slug}`;
        return createItem(varName, f.name, f.fontFamily, document, position, range);
    });
}

export function getShadows(shadows: any[], document: vscode.TextDocument, position: vscode.Position, range?: vscode.Range): vscode.CompletionItem[] {
    return shadows.map(s => {
        const varName = `--wp--preset--shadow--${s.slug}`;
        return createItem(varName, s.name, s.value, document, position, range);
    });
}

export function getAspectRatios(ratios: any[], document: vscode.TextDocument, position: vscode.Position, range?: vscode.Range): vscode.CompletionItem[] {
    return ratios.map(r => {
        const varName = `--wp--preset--aspect-ratio--${r.slug}`;
        return createItem(varName, r.value, r.value, document, position, range);
    });
}

export function getLayouts(vars: any, document: vscode.TextDocument, position: vscode.Position, range?: vscode.Range): vscode.CompletionItem[] {
    const items: vscode.CompletionItem[] = [];
    if (vars.contentSize) { items.push(createItem('--wp--style--global--content-size', vars.contentSize, vars.contentSize, document, position, range)); }
    if (vars.wideSize) { items.push(createItem('--wp--style--global--wide-size', vars.wideSize, vars.wideSize, document, position, range)); }
    return items;
}

export function getCustom(customVars: any[], document: vscode.TextDocument, position: vscode.Position, range?: vscode.Range): vscode.CompletionItem[] {
    return customVars.map(c => createItem(c.varName, c.value, c.value, document, position, range));
}
