const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./tests/**/*.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "https://www.oranum.com",
      show: false,
      browser: "chromium",
      waitForTimeout: 3000,
    },
  },
  include: {
    I: "./steps_file.js",
    homePage: "./pages/HomePage.js",
    homePageOperations: "./operations/homePageOperations.js",
  },
  plugins: {
    stepByStepReport: {
      enabled: true,
    },
  },
  bootstrap: null,
  teardown: null,
  mocha: {},
  gherkin: {
    features: "./features/**/*.feature",
    steps: [
      "./steps/partialTextSearch_steps.js",
      "./steps/exactNameSearch_steps.js",
    ],
  },
  timeout: {
    // Increase the waiting timeout to 3000 milliseconds (3 seconds)
    retry: 3000,
    timeout: 3000,
    scripts: 3000,
  },
};
