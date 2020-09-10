const { resolve } = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^src/(.*)$': resolve(__dirname, './src/$1'),
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleDirectories: ['node_modules'],
  modulePathIgnorePatterns: ['directoryNameToIgnore'],
  collectCoverage: true,
  collectCoverageFrom: ['!src/**/index.ts', '!src/routes.ts', 'src/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', 'dist/'],
  coverageReporters: ['json', 'json-summary', 'lcov', 'text', 'text-summary', 'html'],
  testEnvironment: 'node',
  verbose: true,

  setupFilesAfterEnv: ['jest-extended'],
};
