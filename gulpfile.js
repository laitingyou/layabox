'use strict'
var gulp=require('gulp'),
    /*-------concat合并js---------*/
concat=require('gulp-concat');
gulp.task('textconcat',function(){
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dest/js'))
        .pipe(livereload());
});
/*-------------livereload-----------------*/
var livereload=require('gulp-livereload');
gulp.task('watch',function () {
    livereload.listen();
    gulp.watch('src/**/*',['textconcat']);
});

var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:63342/layabox/index.html"
    });
});
/*--------------------js语法检测插件----------------*/
var jslint=require("gulp-jslint");
gulp.task("jslint",function () {
  gulp.src("src/js/*.js")
      .pipe(jslint())//这里可以配置检测
      .pipe(jslint.reporter("default"))
});