/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var rimraf = require("rimraf");
var concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify");

var buffer = require('gulp-buffer');
var source = require('vinyl-source-stream');
var request = require('request');
var merge = require('merge2');

var paths = {
	externaljs: "./scripts/",
};

gulp.task('copy-requirejs', function () {
	gulp.src(['./node_modules/requirejs/require.js'])
	.pipe(concat(paths.externaljs + "/require.js"))
	.pipe(gulp.dest("."));
});

gulp.task('copy-jquery', function () {
	gulp.src(['./bower_components/jquery/dist/jquery.js'])
	.pipe(concat(paths.externaljs + "/jquery.js"))
	.pipe(gulp.dest("."));
});

gulp.task('copy-react', function () {
	gulp.src(['./bower_components/react/react.js'])
	.pipe(concat(paths.externaljs + "/react.js"))
	.pipe(gulp.dest("."));
});

gulp.task('copy-reactdom', function () {
	gulp.src(['./bower_components/react/react-dom.js'])
	.pipe(concat(paths.externaljs + "/react-dom.js"))
	.pipe(gulp.dest("."));
});

gulp.task('copy-tweenmax', function () {
	gulp.src(['./bower_components/gsap/src/minified/tweenmax.min.js'])
	.pipe(concat(paths.externaljs + "/tweenmax.js"))
	.pipe(gulp.dest("."));
});

gulp.task('copy-scrollmagic', function () {
	gulp.src(['./bower_components/scrollmagic/scrollmagic/minified/scrollmagic.min.js'])
	.pipe(concat(paths.externaljs + "/scrollmagic.js"))
	.pipe(gulp.dest("."));
});

gulp.task('copy-scrollmagic-plugins', function () {
	gulp.src(['./bower_components/scrollmagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js',
	'./bower_components/scrollmagic/scrollmagic/minified/plugins/animation.velocity.min.js'])
	.pipe(concat(paths.externaljs + "/scrollmagic-plugins.js"))
	.pipe(uglify())
	.pipe(gulp.dest("."));
});