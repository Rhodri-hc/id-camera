'use strict'

module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     🚀  新增功能 | A new feature',
      emoji: '🚀'
    },
    {
      value: 'fix',
      name: 'fix:      🧩  修复缺陷 | A bug fix',
      emoji: '🧩'
    },
    {
      value: 'docs',
      name: 'docs:     📚  文档更新 | Documentation only changes',
      emoji: '📚'
    },
    {
      value: 'style',
      name: 'style:    🎨  代码格式 | Changes that do not affect the meaning of the code',
      emoji: '🎨'
    },
    {
      value: 'refactor',
      name: 'refactor: ♻️   代码重构 | A code change that neither fixes a bug nor adds a feature',
      emoji: '♻️'
    },
    {
      value: 'perf',
      name: 'perf:     ⚡️  性能优化 | A code change that improves performance',
      emoji: '⚡️'
    },
    {
      value: 'test',
      name: 'test:     ✅  测试相关 | Adding missing tests or correcting existing tests',
      emoji: '✅'
    },
    {
      value: 'build',
      name: 'build:    📦️  构建相关 | Changes that affect the build system or external dependencies',
      emoji: '📦️'
    },
    {
      value: 'ci',
      name: 'ci:       🎡  持续集成 | Changes to our CI configuration files and scripts',
      emoji: '🎡'
    },
    {
      value: 'revert',
      name: 'revert:   ⏪️  回退代码 | Revert to a commit',
      emoji: '⏪️'
    },
    {
      value: 'chore',
      name: 'chore:    🔨  其他修改 | Other changes that do not modify src or test files',
      emoji: '🔨'
    }
  ],

  scopes: ['全局', '功能模块'],

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
    type: '选中一种你的提交类型:',
    scope: '\n选择修改涉及范围 (可选):',
    // used if allowCustomScopes is true
    customScope: '请输入本次改动的范围（如：功能、模块等）:',
    subject: '简短说明:\n',
    body: '详细说明，使用"|"分隔开可以换行(可选):\n',
    breaking: '非兼容性，破坏性变化说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
  usePreparedCommit: true
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
}
