const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
  rootDir: "./",
  preset: "ts-jest",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^.+\\.(svg)$": "<rootDir>/src/__mocks__/svgrMock.tsx", // Maps any import ending with .svg to the mock file, using overwriting syntax of regExp
    "^@/(.*)$": "<rootDir>/src/$1", // Maps "@/*" to "./src/*"
    "^@/components(.*)$": "<rootDir>/src/components$1", // Maps "@components" to "./src/components"
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1", // Maps "@hooks" to "./src/hooks"
    "^@/utils(.*)$": "<rootDir>/src/utils$1", // Maps "@utils" to "./src/utils"
    "^@/services(.*)$": "<rootDir>/src/services$1", // Maps "@services" to "./src/services"
  },
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
