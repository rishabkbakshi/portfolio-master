
const config = require('./gulp-config.json')
const scripts = require('./scripts')
const styles = require('./styles')
const assets = require('./assets')
const inject = require('./inject')

const gulp = require('gulp')
const del = require("del")

// Clean assets
function clean() {
    return del([
        config.path.dist.default + "**/*"
    ]);
}

function copyFavIcon(){
    return gulp
        .src("./src/favicon.ico")
        .pipe(gulp.dest('./dist/'))
}

gulp.task("clean:dist", clean);
gulp.task("copyFavIcon", copyFavIcon);

gulp.task('build:dist', gulp.series(
    'clean:dist',
    'scripts:dist',
    'styles:dist',
    'assets:dist',
    'inject:dist',
    'copyFavIcon'
))