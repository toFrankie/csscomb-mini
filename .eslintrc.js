module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['eslint-config-alloy'],
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
    mocha: true,
    jest: true,
    jasmine: true
  },
  globals: {
    __DEV__: true,
    __WECHAT__: true,
    __ALIPAY__: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    getApp: true,
    getCurrentPages: true,
    wx: true,
    my: true,
    swan: true
  },
  rules: {}
}
