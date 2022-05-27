// https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js

module.exports = {
  types: [
    { value: 'feat', name: '✨ feat:     添加新特性' },
    { value: 'fix', name: '🐞 fix:      修复bug' },
    { value: 'docs', name: '📃 docs:     仅仅修改文档' },
    {
      value: 'style',
      name: '🌈 style:    仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑'
    },
    {
      value: 'refactor',
      name: '🦄 refactor: 代码重构，没有加新功能或者修复bug'
    },
    {
      value: 'perf',
      name: '🎈 perf:     优化相关，比如提升性能、体验'
    },
    { value: 'test', name: '🧪 test:     增加或更正测试用例' },
    { value: 'build', name: '🔧 build:    依赖相关的内容' },
    { value: 'ci', name: '🐎 ci:       ci配置相关 例如对 k8s，docker的配置文件的修改' },
    {
      value: 'chore',
      name: '🐳 chore:    改变构建流程、或者增加依赖库、工具等'
    },
    { value: 'revert', name: '↩  revert:   回滚到上一个版本' }
  ],

  // scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '<Type>      选择提交类型(必选)：\n',
    scope: '<Scope>     填写修改范围，如本次修改包含哪些模块(可选，回车可跳过)：\n',
    customScope: '<Scope>     修改范围，如本次修改包含哪些模块(可选，回车可跳过)：\n', // used if allowCustomScopes is true
    subject: '<Subject>   概述(必填，不超过90字)：\n',
    body: '<Body>      详情(可选，换行请用 | 连接，回车跳过)：\n',
    breaking: '<Break>     破坏性变更(可选，请列出本次修改的所有破坏性变更，回车可跳过)：\n',
    footer:
      '<Footer>    备注(可选，通常是close issues，例如: #31, #34。换行请用 | 连接，回车可跳过)：\n',
    confirmCommit: '您确定要继续上面的提交吗？'
  },

  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  // skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 90,
  breaklineChar: '|', // It is supported for fields body and footer.
  breakingPrefix: 'BREAKING CHANGE:',
  footerPrefix: 'Closes:'
  // askForBreakingChangeFirst: true, // default is false
}
