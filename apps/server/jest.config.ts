/* eslint-disable */
export default {
  displayName: "server",
  preset: "./../../jest.preset.js",
  // globalSetup: "<rootDir>/test/utils/globalSetup.ts",
  // globalTeardown: "<rootDir>/test/utils/globalTeardown.ts",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../coverage/apps/server",
};
