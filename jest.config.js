module.exports = {
  roots: ['<rootDir>tests'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|sass)$': 'jest-transform-stub',
  },
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>tests/setup'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  setupFilesAfterEnv: ['<rootDir>tests/setup.tsx'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>src/components$1',
    '\\.(css|sass)$': 'identity-obj-proxy',
  },
};
