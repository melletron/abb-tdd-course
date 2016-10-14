var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var jasmine = require('gulp-jasmine-phantom');
var watch = require('gulp-watch');
var istanbul = require('gulp-istanbul');

var specRunnerConfig = [
    'vendor/angular/angular.js',
    'vendor/angular-mocks/angular-mocks.js',
    'test/mocks/**/*.js',
    'app/**/*.js',
    'app/**/*.spec.js'
];

gulp.task('spec-runner', function () {
    return gulp.src(specRunnerConfig)
        .pipe(watch(specRunnerConfig))
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({port: 8887}));
});