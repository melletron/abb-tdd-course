// karma.conf.js
module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            'vendor/angular/angular.js',
            'test/mocks/**/*.js',
            'vendor/angular-mocks/angular-mocks.js',
            'app/**/*.js',
            'app/**/*.spec.js'
        ],
        reporters: ['spec', 'coverage'],
        preprocessors: {
            'app/**/!(*spec).js': ['coverage']
        },
        browsers: [
            'Chrome'
        ],
        singleRun: true
    });
};