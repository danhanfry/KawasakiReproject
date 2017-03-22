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
	ninjacustomcss: "./KawasakiNinja650/css/",
	externaltestjs: "./scripts/core testing",
	externalcss: "./styles",
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

gulp.task('copy-scrollmagic-jquery-version', function () {
	gulp.src(['./bower_components/scrollmagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js',])
	.pipe(concat(paths.externaljs + "/jquery.ScrollMagic.js"))
	.pipe(uglify())
	.pipe(gulp.dest("."));
});

gulp.task('copy-scrollmagic-gsap-version', function () {
	gulp.src(['./bower_components/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'])
	.pipe(concat(paths.externaljs + "/animation.gsap.js"))
	.pipe(uglify())
	.pipe(gulp.dest("."));
});

gulp.task('copy-react-marked', function () {
	gulp.src(['./node_modules/marked/lib/marked.js'])
	.pipe(concat(paths.externaljs + "/marked.js"))
	.pipe(gulp.dest("."));
});

gulp.task('copy-scrollmagic-plugins', function () {
	gulp.src(['./bower_components/scrollmagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js',
	'./bower_components/scrollmagic/scrollmagic/minified/plugins/animation.gasp.min.js'])
	.pipe(concat(paths.externaljs + "/scrollmagic-plugins.js"))
	.pipe(uglify())
	.pipe(gulp.dest("."));
});

gulp.task("bundleNinja650Css", function () {

	gulp.src([paths.ninjacustomcss + "fonts.css", paths.ninjacustomcss + "styles.css",
				paths.ninjacustomcss + "modal.css", paths.ninjacustomcss + "commercial.css",
				paths.ninjacustomcss + "vtr.css", paths.ninjacustomcss + "socialcommunity.css",
				paths.ninjacustomcss + "researchtools.css", paths.ninjacustomcss + "explore.css",
				paths.ninjacustomcss + "browserhacks.css", ])
		.pipe(concat(paths.ninjacustomcss + "ninjasixfifty.min.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("."));
});

gulp.task('copy-jasmine-file', function () {
	gulp.src(['./bower_components/jasmine/lib/jasmine-core/jasmine.js'])
	.pipe(concat(paths.externaltestjs + "/jasmine.js"))
	.pipe(uglify())
	.pipe(gulp.dest("."));
});

gulp.task('copy-jasmine-htmljs', function () {
	gulp.src(['./bower_components/jasmine/lib/jasmine-core/jasmine-html.js'])
	.pipe(concat(paths.externaltestjs + "/jasmine-html.js"))
	.pipe(uglify())
	.pipe(gulp.dest("."));
});

gulp.task('copy-jasmine-boot', function () {
	gulp.src(['./bower_components/jasmine/lib/jasmine-core/boot.js'])
	.pipe(concat(paths.externaltestjs + "/boot.js"))
	.pipe(uglify())
	.pipe(gulp.dest("."));
});

gulp.task('copy-jasmine-css', function () {

	gulp.src(['./bower_components/jasmine/lib/jasmine-core/jasmine.css'])
		.pipe(concat(paths.externalcss + "/jasmine.min.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("."));
});

gulp.task('copy-redux-main', function () {
	gulp.src(['./node_modules/redux/dist/redux.js'])
	.pipe(concat(paths.externaljs + "/redux.js"))
	.pipe(gulp.dest("."));
});

gulp.task('copy-react-redux', function () {
	gulp.src(['./node_modules/react-redux/dist/react-redux.js'])
	.pipe(concat(paths.externaljs + "/react-redux.js"))
	.pipe(gulp.dest("."));
});