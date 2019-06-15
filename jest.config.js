module.exports = {
  preset: 'react-native',
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|react-navigation|@react-navigation/.*))"
  ],
  globals: {
    "ts-jest": {
      "tsConfig": "tsconfig.jest.json"
    }
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  setupFiles: [
    "./tests/setup.js"
  ],
  moduleNameMapper: {
    // "components(.*)$": "<rootDir>/src/components/$1",
    "pages(.*)$": "<rootDir>/src/pages/$1"
  }
}
