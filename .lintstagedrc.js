module.exports = {
  '*.{js}': ['prettier --wirte', 'eslint --fix'],
  '*.{css,wxss,acss}': filenames => [
    `prettier --write ${filenames.join(' ')}`,
    `gulp csscombMini --path '${filenames.join(',')}'`,
  ],
  '*.{json,wxml,axml,swan}': 'prettier --write',
}
