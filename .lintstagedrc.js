module.exports = {
  '*.{js}': 'eslint --fix',
  '*.{css,wxss,acss}': filenames => [
    `prettier --write ${filenames.join(' ')}`,
    `gulp csscombTask  --path '${filenames.join(',')}'`
  ],
  '*.{json,wxml,axml}': 'prettier --write'
}
