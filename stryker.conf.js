module.exports = function (config) {
    config.set({
        files: [
            // Add your files here, this is just an example:
            {
                pattern: 'app/**/*.js',
                mutated: true,
                included: true
            },
            'app/**/*.spec.js'
        ],
        testRunner: 'karma',
        testFramework: 'jasmine',
        reporter: ['clear-text', 'progress']
    });
};