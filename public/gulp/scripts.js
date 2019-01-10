
const config = require('./gulp-config.json')

const gulp = require('gulp')
const plumber = require("gulp-plumber")
const eslint = require("gulp-eslint")
const uglify = require("gulp-uglify")
const browsersync = require("browser-sync")
const concat = require('gulp-concat')
var angularOrder = require('gulp-angular-order');


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
        .pipe(angularOrder())
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(config.path.dist.js))
}

function vendorJsDist() {
    let jsArr = config.injectScripts.vendor;
    let jsSrc = addPathPrefix("./src/", jsArr)
    console.log(jsSrc);

    return gulp
        .src(jsSrc)
        .pipe(uglify())
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest(config.path.dist.js))
}


gulp.task("scripts:dev", gulp.series(vendorJsDev, jsDev));
gulp.task("scripts:dist", gulp.series(vendorJsDist, jsDist));