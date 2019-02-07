
const config = require('./gulp-config.json')

const gulp = require('gulp')
const plumber = require("gulp-plumber")
const eslint = require("gulp-eslint")
const uglify = require("gulp-uglify")
const rename = require("gulp-rename");
const browsersync = require("browser-sync")
const concat = require('gulp-concat')
const babel = require('gulp-babel');
const ngAnnotate = require('gulp-ng-annotate');


function addPathPrefix(prefix, array) {
    let newArr = array;
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = prefix + newArr[i];
    }
    return newArr;
}

// Lint scripts
function scriptsLint() {
    return gulp
        .src([config.path.src.js])
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function jsDev() {
    return gulp
        .src([config.path.src.js])
        .pipe(plumber())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest(config.path.temp.js))
        .pipe(browsersync.stream())
}

function vendorJsDev() {
    return gulp
        .src(config.path.src.vendorJs)
        .pipe(gulp.dest(config.path.temp.vendorJs))
        .pipe(browsersync.stream())
}

function jsDist() {
    let jsArr = config.injectScripts.app;
    let jsSrc = addPathPrefix("./src/", jsArr)
    console.log(jsSrc);

    return gulp
        .src(jsSrc)
        .pipe(plumber())
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(config.path.dist.js))
}

function vendorJsDist() {
    let jsArr = config.injectScripts.vendor;
    let jsSrc = addPathPrefix("./src/", jsArr)
    console.log(jsSrc);

    return gulp
        .src(jsSrc)
        // .pipe(ngAnnotate())
        .pipe(concat('vendor.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest(config.path.dist.js))
}


gulp.task("scripts:dev", gulp.series(vendorJsDev, jsDev));
gulp.task("scripts:dist", gulp.series(vendorJsDist, jsDist));