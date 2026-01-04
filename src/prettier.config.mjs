/** @type {import {"prettier"}.Config} */
export default {
    trailingComma: "none",
    tabwidth: 4,
    useTabs: true,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    arrowParens: "avoid",
    importorderSeparation: true,
    importorderSortSpecifiers: true,
    importorderCaseInsensitive: true,
    importorderParserPlugins: [
        "classProperties",
        "decorators-legacy",
        "typescript"
    ],
    importorder: ["<THIRD_PARTY_MODULES>", "^@/(.*) $", "^../(.*)", "^./(.*) "],
    plugins: ["@trivago/prettier-plugin-sort-imports"]
}
