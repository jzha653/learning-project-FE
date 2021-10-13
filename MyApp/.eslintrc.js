module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
