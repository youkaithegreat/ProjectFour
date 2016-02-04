/**
 * Created by Kevin on 2/4/2016.
 */

var gulp = require('gulp');

uglify = require('gulp-uglify');
    rename = require('gulp-rename');
    minifyCSS = require('gulp-minify-css');
    minifyHTML= require('gulp-minify-html');
    pipe = require('gulp-pipe');

gulp.task('scripts', function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./dist/js/'));

});

gulp.task('styles', function(){
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('html', function(){
    gulp.src('index.html')
        .pipe(minifyCSS())
        .pipe(rename('app.min.html'))
        .pipe(gulp.dest('./dist/'));
});


gulp.task('hello', function(){
    console.log('Hello World!')
});


gulp.task('default', ['scripts', 'styles', 'html','hello']);

