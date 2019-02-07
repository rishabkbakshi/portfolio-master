
const config = require('./gulp-config.json')

const gulp = require('gulp')
const browsersync = require("browser-sync")
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

// Optimize Images
function images() {
    return gulp
        .src(config.path.src.assets + "**/*")
        .pipe(newer(config.path.temp.assets))
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                // imagemin.jpegtran({ progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        {
                            removeViewBox: false,
                            collapseGroups: true
                        }
                    ]
                })
            ])
        )
        .pipe(gulp.dest(config.path.temp.assets));
}

function copyDev(){
    return gulp
    .src(config.path.src.assets + "**/*")
    .pipe(gulp.dest(config.path.temp.assets))
    .pipe(browsersync.stream())
}

function copyDist(){
    return gulp
    .src(config.path.temp.assets + "**/*")
    .pipe(gulp.dest(config.path.dist.assets))
}

function copyViews(){
    return gulp
    .src(config.path.src.views + "**/*")
    .pipe(gulp.dest(config.path.dist.views))
}

gulp.task('assets:dev', gulp.series(copyDev))
gulp.task('assets:dist', gulp.series(images, copyDist, copyViews))
