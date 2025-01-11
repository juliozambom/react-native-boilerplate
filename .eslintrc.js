// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo'],
  ignorePatterns: ['/dist/*'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-uses-vars': 2,
    'react/jsx-no-undef': 2,
    'react/prop-types': 0,
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // ou "latest" para ES2020 ou superior
    sourceType: 'module', // Para permitir o uso de import/export
  },
};
