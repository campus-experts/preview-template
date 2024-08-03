/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: '<rootDir>/_scripts/jest-global-setup.ts',
  setupFilesAfterEnv: ['<rootDir>/_scripts/jest-setup.ts'],
};
