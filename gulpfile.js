var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var jasmine = require('gulp-jasmine-phantom');
var watch = require('gulp-watch');
var istanbul = require('gulp-istanbul');

var jipConfig = {
    base: '.',
    src: ['app/**/*.js', '!app/**/*.spec.js', '!app/vendor/**'],
    lib: ['app/vendor/angular/angular.js', 'app/vendor/angular-mocks/angular-mocks.js'],
    spec: 'app/**/*.spec.js',
    istanbul: {
        report: 'report',
        reporters: ['lcov', 'clover']
    }
};

var specRunnerConfig = [
    'app/vendor/angular/angular.js',
    'app/vendor/angular-mocks/angular-mocks.js',
    'app/**/*.js',
    'app/**/*.spec.js'
];

gulp.task('spec-runner', function () {
    return gulp.src(specRunnerConfig)
        .pipe(watch(specRunnerConfig))
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({port: 8888}));
});

gulp.task('coverage-test', function () {
    var jip = require('jasmine-istanbul-phantom');
    jip(jipConfig);
});