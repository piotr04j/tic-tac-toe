'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel');


gulp.task('sass', function () {
	return gulp.src('./src/sass/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/css'));
});

gulp.task('gbable', function (){
	gulp.src('./src/js/*.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('./app/js'));
});

 
gulp.task('work', function () {
	gulp.watch('./src/sass/*.sass', ['sass']);
	gulp.watch('./src/js/*.js', ['gbable']);
});
