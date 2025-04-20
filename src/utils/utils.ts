import * as vscode from 'vscode';
import * as fs from 'fs';

export function loadThemeJson(themeJsonPath: string, lastModifiedTime: number): any {
    const stats = fs.statSync(themeJsonPath);
    if (stats.mtimeMs > lastModifiedTime) {
        const fileContent = fs.readFileSync(themeJsonPath, 'utf8');
        return JSON.parse(fileContent);
    }
    return null;
}

export function getRange(document: vscode.TextDocument, position: vscode.Position): vscode.Range | undefined {
    const lineText = document.lineAt(position).text;
    const varStart = lineText.lastIndexOf('--wp--', position.character);
    return varStart !== -1
        ? new vscode.Range(new vscode.Position(position.line, varStart), position)
        : undefined;
}

export function getCssProp(code: string, offset: number): string | null {
    const codeBeforeCursor = code.slice(0, offset);
    const match = codeBeforeCursor.match(/([\w-]+)\s*:\s*[^;]*$/);
    return match ? match[1] : null;
}

export function merge<T extends { slug: string }>(themePresets: T[], wpDefaults: T[]): T[] {
    const existingSlugs = new Set(themePresets.map(p => p.slug));
    const filteredDefaults = wpDefaults.filter(p => !existingSlugs.has(p.slug));
    return [...themePresets, ...filteredDefaults];
}

export function flattenVars(
    obj: Record<string, any>,
    prefix: string[] = []
): { varName: string; keyPath: string; value: string }[] {
    const result: { varName: string; keyPath: string; value: string }[] = [];

    for (const [key, val] of Object.entries(obj)) {
        const kebab = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        const nextPrefix = [...prefix, kebab];

        if (typeof val === 'object' && val !== null) {
            result.push(...flattenVars(val, nextPrefix));
        } else {
            result.push({
                varName: `--wp--custom--${nextPrefix.join('--')}`,
                keyPath: [...prefix, key].join('.'),
                value: val
            });
        }
    }

    return result;
}

export function filterAndSort(items: vscode.CompletionItem[]): vscode.CompletionItem[] {
    const map = new Map<string, vscode.CompletionItem>();

    for (const item of items) {
        const key = typeof item.insertText === 'string'
            ? item.insertText
            : item.insertText?.toString() ?? item.label.toString();

        const existing = map.get(key);

        const getPriority = (i: vscode.CompletionItem) => {
            if (i.sortText?.startsWith('000_')) { return 2; }
            if (i.sortText?.startsWith('111_')) { return 0; }
            return 1;
        };

        if (!existing || getPriority(item) > getPriority(existing)) {
            map.set(key, item);
        }
    }

    return Array.from(map.values());
}

export function wrapVar(document: vscode.TextDocument, position: vscode.Position): boolean {
    const line = document.lineAt(position.line).text;
    const beforeCursor = line.slice(0, position.character);

    if (/var\(\s*--[\w-]*$/.test(beforeCursor) || /var\(\s*$/.test(beforeCursor)) {
        return false;
    }

    if (/^\s*[\w-]+\s*:\s*--[\w-]*$/.test(beforeCursor)) {
        return true;
    }

    return true;
}
