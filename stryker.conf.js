module.exports = function (config) {
    config.set({
        files: [
            {
                pattern: 'vendor/angular/angular.js',
                mutated: false,
                included: true
            },
            {
                pattern: 'vendor/angular-mocks/angular-mocks.js',
                mutated: false,
                included: true
            },
            {
                pattern: 'test/mocks/**/*.js',
                mutated: false,
                included: true
            },
            {
                pattern: 'app/ng/**/!(*spec).js',
                mutated: true,
                included: true
            },
            'app/ng/**/*.spec.js'
        ],
        testRunner: 'karma',
        testFramework: 'jasmine',
        karmaConfig: {
            browsers: ['Chrome']
        },
        reporter: ['html', 'progress']
    });
};