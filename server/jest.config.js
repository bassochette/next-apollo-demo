module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(spec|test).+(ts)",
    "**/?(*.)+(spec|test).+(ts)",
  ],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
