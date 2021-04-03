module.exports = {
  '*.wxss': filenames => filenames.map(filename => `gulp csscombTask --path ${filename}`)
}