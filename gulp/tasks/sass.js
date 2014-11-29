var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var config = require('../config.js').sass;
var autoprefer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var handleErrors = require('../util/handleErrors');

gulp.task('sass', ['images'], function(){
	// Start drinking
	return gulp.src(config.src)
		// build the sassy awesomenss
		.pipe(sass(config.settings))
		.on('error', handleErrors)
		// Autoprefix for crap -v-prefixes
		// .pipe(autoprefer({ browsers: ['last 2 version']}))
		// and dump this stream to hell
		.pipe(gulp.dest(config.dest))
		// Now update the browsers
		.pipe(browserSync.reload({stream:true}));
});