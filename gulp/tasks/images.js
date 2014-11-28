var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
changed  = require('gulp-changed'),
config = require('../config').images;

gulp.task('images', function(){

  return gulp.src(config.src)
 	// Ignore unchanged files
    .pipe(changed(config.dest))
    // Optimize images
    .pipe(imagemin()) 
    .pipe(gulp.dest(config.dest));
});
