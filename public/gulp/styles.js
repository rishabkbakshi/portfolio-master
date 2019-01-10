
const config = require('./gulp-config.json')

const gulp = require('gulp')
const plumber = require("gulp-plumber")
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const browsersync = require("browser-sync")
const concat = require('gulp-concat')

function addPathPrefix(prefix, array) {
    let newArr = array;
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = prefix + newArr[i];
    }
    return newArr;
}

// CSS task
function cssDev() {
    return gulp
        .src(config.path.src.scss)
        .pipe(plumber())
        .pipe(sass({ outputStyle: "expanded" }).on('error', sass.logError))
        .pipe(gulp.dest(config.path.temp.css))
        .pipe(browsersync.stream())
}

function vendorCssDev() {
    return gulp
        .src(config.path.src.vendorCss)
        .pipe(gulp.dest(config.path.temp.vendorCss))
        .pipe(browsersync.stream())
}

function cssDist() {
    let cssArr = ["app/styles/**/*.scss"].concat(config.injectStyles.app)
    let cssSrc = addPathPrefix("./src/", cssArr)
    console.log(cssSrc);
    
    return gulp
        .src(cssSrc)
        .pipe(plumber())
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(concat('app.css'))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(config.path.dist.css))
}

function vendorCssDist() {
    let vendorCssArr = config.injectStyles.vendor;
    let vendorCssSrc = addPathPrefix("./src/", vendorCssArr)
    console.log(vendorCssSrc);

    return gulp
        .src(vendorCssSrc)
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest(config.path.dist.css))
}


gulp.task("styles:dev", gulp.series(vendorCssDev, cssDev));
gulp.task("styles:dist", gulp.series(vendorCssDist, cssDist));

