module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/react-native/cleanup-after-each',
    './jest.setup.js',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
  ],
  testEnvironment: 'node',
};
