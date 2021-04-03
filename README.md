# 项目说明

整个项目的初衷，是为了让小程序支持使用 [CSScomb](https://github.com/csscomb/csscomb.js) 来格式化 WXSS、ACSS 这些文件。其实借助 Prettier 的 override 功能就能很好的对我们的小程序样式文件进行格式化。

但是 Prettier 没有 CSS 属性的排序功能，所以写一个 Demo 来实现 WXSS 的格式化和排序。

> PS: 可能是为了满足自己的强迫症，哈哈。

思路可看以下两篇文章：

1. [将 CSScomb 集成到微信小程序项目中](https://www.jianshu.com/p/7c3ce9be7341)
2. [将 CSScomb 集成到 Git Hook 中](https://www.jianshu.com/p/734aeca6709c)

### Usage

1. 克隆

```shell
$ git clone git@github.com:toFrankie/csscomb-mini.git
```

2. 安装依赖

```shell
$ yarn install
```

3. 格式化操作

```shell
$ yarn run csscomb:mini
```

### 自实现的 CSScomb 插件

详情看 `gulpfile.js` 的方法 `csscombPlugin`。

### 如何配置 csscombTask 脚本

- `--path` 表示符合 glob 文件匹配模式的路径，多个路径是用 `,` 隔开。还有我限制了仅支持项目下的文件。
- `--ext` 表示扩展名，如 `.css`、`.wxss` 等。（此选项目前没什么用，保留下来后续优化用）

> 若对 Glob 模式不了解，可看 [Glob 详解](https://www.gulpjs.com.cn/docs/getting-started/explaining-globs/#glob-详解)。

```json
{
  "scripts": {
    "csscomb:mini": "gulp csscombTask --path <filepath> --ext <extension>"
  }
}
```

例如：

- 匹配所有 wxss 文件：`"gulp csscombTask --path ./**/*.wxss"`
- 匹配个别文件：`"gulp csscombTask --path app.wxss,pages/index/index.wxss"`

### 其他

* [gulp-git-staged](https://www.npmjs.com/package/gulp-git-staged)

### 待完善

1. 当 gulp csscombTask 中不传参（path）时，是不处理，还是处理所有文件？
2. 将 CSScomb 集成到 ESLint、Prettier 中