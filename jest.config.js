/** @type {import('@jest/types').Config.ProjectConfig} */
module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)',
  ],
};
