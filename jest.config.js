module.exports = {
  verbose: true,
  preset: '@shelf/jest-mongodb',
  setupFilesAfterEnv: ['<rootDir>enzyme.config.js'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
};
