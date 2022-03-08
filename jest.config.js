module.exports = {
  testEnvironment: 'jsdom',
    moduleFileExtensions: [
      'js',
      'ts',
      'json',
      'vue'
    ],
    transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.vue$': 'vue3-jest',
      '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
}
