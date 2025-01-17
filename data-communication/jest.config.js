module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest',  // Ensures Angular templates and TypeScript are handled
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'lcov', 'text-summary'],
};