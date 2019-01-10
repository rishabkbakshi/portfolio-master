"use strict";

const gulp = require('gulp')
const autoprefixer = require("autoprefixer");
const cp = require("child_process");

const dev = require('./gulp/build-dev')
const production = require('./gulp/build-production')

gulp.task('serve', gulp.series('build:dev', 'watch'));
gulp.task('deploy', gulp.series('build:dist'));