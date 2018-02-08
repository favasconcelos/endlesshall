const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp
        .src('./src/**/*.scss', { base: './' })
        .pipe(sass({ includePaths: ['./src'] }).on('error', sass.logError))
        .pipe(gulp.dest('.'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./src/**/*.scss', ['sass']);
});
