
const config = require('./gulp-config.json')

const gulp = require('gulp')
const browsersync = require("browser-sync")
const inject = require('gulp-inject')

function addPathPrefix(prefix, array) {
    let newArr = array;
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = prefix + newArr[i];
    }
    return newArr;
}

function html() {
    return gulp
        .src([config.path.src.html])
        .pipe(gulp.dest(config.path.temp.default))
        .pipe(browsersync.stream())
}

function injectTags() {
    let jsArr = config.injectScripts.vendor.concat(config.injectScripts.app);
    let jsSrc = addPathPrefix("./temp/", jsArr)
    console.log(jsSrc);

    let cssArr = config.injectStyles.vendor.concat(config.injectStyles.appCss);
    let cssSrc = addPathPrefix("./temp/", cssArr)
    console.log(cssSrc);

    let css = gulp.src(cssSrc);
    let js = gulp.src(jsSrc);

    return gulp
        .src(config.path.temp.html)
        .pipe(inject(css, { relative: true }))
        .pipe(inject(js, { relative: true }))
        .pipe(gulp.dest(config.path.temp.default));
}

function htmlDist(){
    return gulp
    .src(config.path.src.default + "index.html")
    .pipe(gulp.dest(config.path.dist.default))
}

function injectDist(){
    let css = gulp.src([
        config.path.dist.css + "vendor.min.css",
        config.path.dist.css + "app.min.css"
    ]);
    let js = gulp.src([
        config.path.dist.js + "vendor.min.js",
        config.path.dist.js + "app.min.js"
    ]);
    return gulp
        .src(config.path.dist.html)
        .pipe(inject(css, { relative: true }))
        .pipe(inject(js, { relative: true }))
        .pipe(gulp.dest(config.path.dist.default));
}


gulp.task("html", gulp.series(html, injectTags));
gulp.task("injectTags", injectTags);

gulp.task("inject:dist", gulp.series(htmlDist, injectDist))