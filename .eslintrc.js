module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'no-console': 'off',
    'react-hooks/exhaustive-deps': 'error', // react-hooks 依赖检查
    'no-empty': 'off', // catch{} 允许为空
  },
};
