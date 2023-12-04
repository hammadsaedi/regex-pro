// jest.config.js
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    setupFiles: ['./setupTests.js'], // Add this line

  };