module.exports = {
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/test/$1'
  },
  testMatch: [
    '<rootDir>/test/*.spec.js'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};