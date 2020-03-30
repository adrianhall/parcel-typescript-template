module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}'
  ],
  coveragePathIgnorePatterns: [
    '/.*.stories.[jt]sx?$',
    '/.*.test.[jt]sx?$',
    '/node_modules'
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    '<rootDir>/enzyme.config.ts'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testEnvironment: 'node',
};
