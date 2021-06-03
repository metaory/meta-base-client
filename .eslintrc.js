module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: ['google', 'eslint:recommended', 'plugin:vue/recommended'],
  plugins: ['vue'],
  settings: {
    // 'import/resolver': {
    //   webpack: {
    //     config: {
    //       resolve: {
    //         alias: {
    //           '~': __dirname,
    //         },
    //       },
    //     },
    //   },
    // },
  },
  rules: {
    'comma-dangle': 0,
    'arrow-parens': 0,
    'one-var': 0,
    semi: [2, 'never'],
    quotes: 2,
    'space-before-function-paren': 0,
    'generator-star-spacing': 'off',
    'object-curly-spacing': [2, 'always'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'block-spacing': [2, 'always'],
  },
}
