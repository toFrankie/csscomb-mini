# 项目说明

整个项目的初衷，以及实现思路在[简书](https://www.jianshu.com/u/f4dac74bd955)更新：

- [实现一个 CSScomb 的 Gulp 插件并应用于微信小程序](https://www.jianshu.com/p/7c3ce9be7341)。

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
