module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.wxss', '*.acss'],
      options: {
        parser: 'css',
      },
    },
    {
      files: ['*.wxml', '*.axml', '*.swan'],
      options: {
        parser: 'html',
      },
    },
  ],
}
