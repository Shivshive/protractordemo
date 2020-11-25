
const myReporter = require('../jasmineCustomReporter');
// const jasmine = require('jasmine');

// An example configuration file.
exports.config = {

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  // capabilities: {
  //   'browserName': 'chrome',
  //   'logName' : 'chrome'
  // },

  // seleniumServerJar : 'D:/Eclipse progs/jars/selenium-server-standalone-3.11.0.jar',

  // localSeleniumStandaloneOpts  : {
  //     port : 5555,
  //     jvmArgs: ['-Dwebdriver.ie.driver=IEDriverServer_Win32_2.53.1.exe']
  // },

  // seleniumAddress: "http://192.168.0.104:4444/wd/hub",

  baseUrl: 'http://www.angularjs.org',

  // The timeout in milliseconds for each script run on the browser. This should be longer than the maximum time your application needs to stabilize between tasks.
  // allScriptsTimeout : 60000,

  multiCapabilities: [

    {
      browserName: 'chrome',
      shardTestFiles: true,
      maxInstances: 5,
      chromeOptions: {
        args: ['--headless']
      }
    },

    // {
    //     'browserName' : 'firefox',
    //     'shardTestFiles' : true,
    //     'maxInstances' : 5,
    //     'firefoxOptions' : {
    //       'args': ['--headless']
    //     }

    // }
  ],

  // Maximum number of total browsers sessions
  maxSessions: 5,

  // Whether or not to buffer output when running tests on multiple browsers
  verboseMultiSessions: true,

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  // specs: ['../specs/spec_1.js'],
  specs: ['../specs/spec_2.js'],

  beforeLaunch: function () {
    console.log('beforeLaunch Function is called');
    
  },

  onPrepare: function () {
    console.log('onPrepare Function is called');
    jasmine.getEnv().addReporter(myReporter);
  },

  onComplete: function () {
    console.log('onComplete Function is called');
  },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true
  },

  // The params object will be passed directly to the Protractor instance and can be accessed from your test as browser.params. It is an arbitrary object and can contain anything you may need in your test.
  params: {
    login: {
      user: 'Jane',
      password: '1234'
    }
  },

  //   restartBrowserBetweenTests : true

};
