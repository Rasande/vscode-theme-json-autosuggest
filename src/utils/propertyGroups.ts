export const propertyToTypeMap: Record<string, string> = {
    // Color
    'color': 'color',
    'background': 'color',
    'background-color': 'color',
    'border-color': 'color',
    'outline-color': 'color',
    'fill': 'color',
    'stroke': 'color',
    'text-decoration-color': 'color',

    // Spacing
    'padding': 'spacing',
    'padding-top': 'spacing',
    'padding-bottom': 'spacing',
    'padding-left': 'spacing',
    'padding-right': 'spacing',
    'margin': 'spacing',
    'margin-top': 'spacing',
    'margin-bottom': 'spacing',
    'margin-left': 'spacing',
    'margin-right': 'spacing',
    'gap': 'spacing',
    'row-gap': 'spacing',
    'column-gap': 'spacing',

    // Font-size
    'font-size': 'fontSize',

    // Font-family
    'font-family': 'fontFamily',

    // Aspect Ratio
    'aspect-ratio': 'aspectRatio',

    // Shadows
    'box-shadow': 'shadow',

    // Layout size
    'width': 'layout',
    'max-width': 'layout',
    'min-width': 'layout',
};
