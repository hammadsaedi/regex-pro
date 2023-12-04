// jest.config.js
module.exports = {
    testEnvironment: 'jest-environment-node',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    setupFiles: ['./setupTests.js'], // Add this line

  };