module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: ['simple-import-sort'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'simple-import-sort/imports': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
  },
}
