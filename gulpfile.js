/**
 * Created by Kevin on 2/4/2016.
 */

var gulp = require('gulp');

uglify = require('gulp-uglify');
    rename = require('gulp-rename');
    minifyCSS = require('gulp-minify-css');
    minifyHTML= require('gulp-minify-html');
    pipe = require('gulp-pipe');
    gulpCopy = require('gulp-file-copy');

gulp.task('scripts', function(){
    gulp.src('views/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/views/js/'));
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('styles', function(){
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'));
    gulp.src('views/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/views/css/'));
});

gulp.task('html', function(){
    gulp.src(['*.html'])
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dist/'));
    gulp.src(['views/*.html'])
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dist/views/'));
});

gulp.task('copy', function(){
    gulp.src('img/*.{png, gif, jpg}')
        .pipe(gulp.dest('./dist/img/'));
    gulp.src('views/images/*.{png, gif, jpg}')
      .pipe(gulp.dest('./dist/views/images/'));
});

gulp.task('default', ['scripts', 'styles', 'html', 'copy']);

