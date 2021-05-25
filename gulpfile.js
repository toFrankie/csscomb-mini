const fs = require('fs')
const path = require('path')
const { src, dest } = require('gulp')
const rename = require('gulp-rename')
const debug = require('gulp-debug')
const Comb = require('csscomb')
const csscomb = require('gulp-csscomb')
const through = require('through2')
const PluginError = require('plugin-error')
const minimist = require('minimist')

const wxssTask = cb => {
  return (
    src('miniprogram/app.wxss')
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
  )
}

// csscomb 插件
const csscombPlugin = () => {
  // 默认支持扩类型
  const defaultExts = ['.css', '.sass', '.scss', '.less']
  // 扩展类型，假设以后兼容字节跳动小程序，可加上 .ttss
  const expandExts = ['.wxss', '.acss']
  const supportExts = defaultExts.concat(expandExts)

  return through.obj(async function (file, enc, cb) {
    let syntax = 'css'
    const filePath = file.path
    const extname = path.extname(filePath)
    // 获取 csscomb 配置
    const combConfigPath = Comb.getCustomConfigPath(path.resolve(__dirname, '.csscomb.json'))
    const combConfig = Comb.getCustomConfig(combConfigPath)

    if (file.isNull()) {
      return cb()
    } else if (file.isStream()) {
      this.emit('error', new PluginError('csscombPlugin', 'Streams are not supported!'))
      return cb()
    } else if (file.isBuffer() && supportExts.includes(extname)) {
      // 默认支持类型，通过扩展名获取。其余当做 css
      if (defaultExts.includes(extname)) {
        syntax = extname.split('.').pop()
      }

      if (combConfigPath && !fs.existsSync(combConfigPath)) {
        this.emit('error', new PluginError('csscombPlugin', 'Configuration file not found: ' + combConfigPath))
        return cb()
      }

      try {
        const comb = new Comb(combConfig)
        const output = await comb.processString(file.contents.toString('utf8'), {
          syntax,
          filename: filePath
        })
        file.contents = Buffer.from(output, 'utf-8')
        this.push(file)
        return cb()
      } catch (e) {
        this.emit('error', new PluginError('csscombPlugin', filePath + '\n' + e))
      }
    } else {
      return cb()
    }
    return cb()
  })
}

// Gulp 任务
const csscombTask = cb => {
  try {
    // 获取参数，如 { _: [ 'csscomb:mini' ], path: 'xxx', ext: 'xxx' }
    const options = minimist(process.argv.slice(2))

    // TODO: 打印参数
    // console.log(options)

    if (!options.path) {
      // 暂时不处理，后续可能会考虑格式化所有文件
      return cb()
    }

    // 过滤掉非项目下的路径
    const paths = options.path.split(',').filter(item => {
      const re1 = /^\//
      const re2 = /^\.\.\//
      return item && !re2.test(item) && (!re1.test(item) || (re1.test(item) && item.includes(__dirname)))
    })

    // 去重
    const newPaths = [...new Set(paths)]

    if (!newPaths.length) {
      return cb()
    }

    // allowEmpty 选项是为了避免在没有找到匹配的文件时抛出错误
    // Error: File not found with singular glob: xxx (if this was purposeful, use `allowEmpty` option)
    return (
      src(newPaths, { allowEmpty: true })
        .pipe(debug())
        .pipe(csscombPlugin())
        .pipe(dest(file => file.base))
    )
  } catch (e) {
    console.warn(e)
  }
}

module.exports = {
  wxssTask,
  csscombTask
}
