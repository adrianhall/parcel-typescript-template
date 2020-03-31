module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}'
  ],
  coveragePathIgnorePatterns: [
    '/.*.stories.[jt]sx?$',
    '/.*.test.[jt]sx?$',
    // Do not check coverage of index.ts files since they are always
    // export combinations.  DO check index.tsx - those are components
    '/index.ts$',
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
