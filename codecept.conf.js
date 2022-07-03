const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'test/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.gymondo.com',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    acceptCookies: './pages/acceptCookies.js',
    login: './pages/login.js',
    myPlan: './pages/myPlan.js',
  },
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "mochaFile": "output/result.xml"
  }
  },
  name: 'taeAssessmentPoorniYasodara'
}