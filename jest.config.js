module.exports = {
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  reporters: ['default'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: true,
}
