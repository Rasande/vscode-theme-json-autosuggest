# WordPress Theme.json Autosuggest

Autocomplete CSS variables from your WordPress theme.json.

## Features

-   <B>Supports both core and custom variables.</b><br>
    Provides suggestions for all default variables (as of WordPress 6.8), unless explicitly disabled in your theme.json.

-   <b>Smart var() wrapping</b><br>
    Suggestions are automatically wrapped in `var()` only when appropriate—no more double wrapping!

-   <b>Context-aware</b><br>
    Suggests only relevant variables based on the current CSS property you’re editing.

-   <b>Minimal performance impact</b><br>
    Theme.json is cached and only reloaded when modified, ensuring fast and seamless autocompletion.

-   <b>Easy integration</b><br>
    Just install and start coding—no configuration needed.

## Requirements

This extension only works inside an open workspace. Make sure you have a folder or project opened in VS Code.

A valid `theme.json` file is also required in your workspace to enable suggestions.

## Extension Settings

This extension contributes the following setting:

-   `theme-json-autosuggest.themeJsonPath`  
    Path to your `theme.json` file. If left blank, the extension will use the `theme.json` located in the workspace root.

## Change Log

See Change Log [here](CHANGELOG.md)

## Issues

Submit the [issues](https://github.com/rasande/vscode-theme-json-autosuggest/issues) if you find any bug or have any suggestion.

## License

MIT
