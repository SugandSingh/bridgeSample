module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-navigation/elements|@react-native(- community)?)/)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect']
}