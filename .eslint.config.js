module.exports = {
  plugins: ['simple-import-sort', 'react', 'react-hooks', 'react-native-a11y'],
  extends: [
    '@pauloelias/eslint-config-javascript-standard-core',
    'standard-jsx',
    'plugin:react-native-a11y/all',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-uses-vars': 2,
    'react/jsx-no-undef': 2,
    'react/prop-types': 0,
    'react-native-a11y/has-valid-accessibility-role': 1,
  },
  env: {
    es6: true,
    commonjs: true,
    jest: true,
  },
};
