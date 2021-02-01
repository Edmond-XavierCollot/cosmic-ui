const path = require("path");

module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "@utils": path.resolve(__dirname, "src/utils"),
  },
};
