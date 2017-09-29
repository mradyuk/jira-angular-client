// Karma configuration
// Generated on Wed Aug 23 2017 13:41:44 GMT+0100 (GMT Daylight Time)

var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {

  var appBase = 'src/';       // transpiled app JS and map files
  var appSrcBase = appBase;      // app source TS files

  var testingBase    = 'test/'; // transpiled test JS and map files
  var testingSrcBase = 'test/'; // test source TS files

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

     plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-webpack'),
      require('karma-typescript')
    ],

    client: {
      builtPaths: [appBase, testingBase], // add more spec base paths as needed
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    //mime: { 'text/x-typescript': ['ts','tsx'] },


    // list of files / patterns to load in the browser
    files: [
      'test/**/*.ts'      
    ],

    webpack: webpackConfig,


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.ts': ['webpack'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    //autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true, 


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
