const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: '.' });

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const customJestConfig = {
  collectCoverageFrom: ['src/**/*.@(j|t)s?(x)'],
  coveragePathIgnorePatterns: ['src/types'],
  moduleNameMapper: {
    '^@/atoms(.*)': '<rootDir>/src/components/atoms$1',
    '^@/constants(.*)': '<rootDir>/src/constants$1',
    '^@/molecules(.*)': '<rootDir>/src/components/molecules$1',
    '^@/organisms(.*)': '<rootDir>/src/components/organisms$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
