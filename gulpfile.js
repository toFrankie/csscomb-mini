const { src, dest } = require('gulp')
const rename = require('gulp-rename')
const debug = require('gulp-debug')
const csscomb = require('gulp-csscomb')

const wxssformat = cb => {
  return src('app.wxss')
    .pipe(debug())
    .pipe(
      rename({
        extname: '.css'
      })
    )
    .pipe(csscomb())
    .pipe(
      rename({
        extname: '.wxss'
      })
    )
    .pipe(dest(file => file.base))
}

module.exports = {
  wxssformat
}