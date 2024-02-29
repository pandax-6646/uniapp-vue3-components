module.exports = {
  types: [
    { value: 'feat', name: 'feat: 新增功能' },
    { value: 'fix', name: 'fix: 修复缺陷' },
    { value: 'docs', name: 'docs: 文档、注释变更' },
    { value: 'style', name: 'style: 代码格式（不影响功能，例如空格、分号等格式修正）' },
    { value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）' },
    { value: 'test', name: 'test: 添加疏漏测试或已有测试改动' },
    { value: 'build', name: 'build: 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）' },
    { value: 'ci', name: 'ci: 修改 CI 配置、脚本' },
    { value: 'chore', name: 'chore: 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
    {
      value: 'improvement',
      name: 'improvement: 用于对当前实现进行改进而没有添加新功能或修复错误的提交',
    },
    { value: 'merge', name: 'merge: 仅进行分支合并' },
    { value: 'revert', name: 'revert: 回滚到上一个commmit' },
  ],

  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: '模块名称:',
    subject: '描述:',
    body: '长描述，使用"|"换行(可选):\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue:例如:#1, #2(可选):\n',
    confirmCommit: '确定提交?',
  },

  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope','customScope', 'body', 'breaking', 'footer'],
  subjectLimit: 100,
}
