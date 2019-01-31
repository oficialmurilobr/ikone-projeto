const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function compilaSass(){
    return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

gulp.task('sass', compilaSass);

function browser(){
    browserSync.init({
        server:{
            baseDir: "./"
        }
    })
}

gulp.task('browser-sync', browser);

function watch(){
    gulp.watch('css/*.scss', compilaSass);
    gulp.watch('*.html').on('change', browserSync.reload);
}

gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-sync'));