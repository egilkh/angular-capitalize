module.exports = function(config){
  config.set({

    basePath : '',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'angular-capitalize_en-us.js',
      'test/capitalize.js'
    ],

    autoWatch : true,
    singleRun: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],
  });
};
