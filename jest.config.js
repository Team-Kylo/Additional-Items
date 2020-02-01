module.exports = {
  verbose: true,
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>enzyme.config.js'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  reporters: ['default', 'jest-junit'],
};
