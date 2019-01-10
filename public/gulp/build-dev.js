
const config = require('./gulp-config.json')
const scripts = require('./scripts')
const styles = require('./styles')
const assets = require('./assets')
const inject = require('./inject')

const gulp = require('gulp')
const del = require("del")
const browsersync = require("browser-sync").create();

// Clean assets
function clean() {
    console.log(config.path);
    return del([
        config.path.temp.default
    ]);
}

// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: config.path.temp.default
        },
        port: config.SERVER_PORT,
        injectChanges: true
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// Watch files
function watchFiles() {
    gulp.watch(config.path.src.scss, gulp.series("styles:dev",browserSyncReload))
    gulp.watch(config.path.src.js, gulp.series("scripts:dev",browserSyncReload))
    gulp.watch(config.path.src.html, gulp.series('html',browserSyncReload))
    gulp.watch(config.path.src.images, gulp.series('assets:dev',browserSyncReload))
}


gulp.task("clean:dev", clean);
gulp.task("watch", gulp.parallel(watchFiles, browserSync));

gulp.task("build:dev", gulp.series(
        'clean:dev',
        gulp.parallel("styles:dev", 'assets:dev', "scripts:dev"),
        'html',
    )
);