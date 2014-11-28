var browserify = require('browserify'),
es6ify = require('es6ify'),
watchify = require('watchify'),
bundleLogger = require('../util/bundleLogger'),
handleErrors = require('../util/handleErrors'),
gulp = require('gulp'),
reactify = require('reactify'),
source = require('vinyl-source-stream'),
react_jade = require('react-jade'),
config = require('../config').browserify;


gulp.task('browserify', function(callback){
	
	function CreateBundle(b_config){
		var bundler = browserify({
				// use in memory caches
				cache: {},
				packageCache: {},
				fullPaths: true,
				// Use them later
				extensions: config.extensions,
				// To toggle sourcemaps
				debug: config.debug,
				entries: b_config.entries
			});

			if( b_config.skipTransform !== true ){
			  	bundler.transform(reactify)
			  		.transform(es6ify)
			  		.transform(react_jade)
				
			}
		var bundle = function(){
			// Create a logger when it starts logging
			bundleLogger.start(b_config.outputName);

			return bundler.bundle()
					.on('error', handleErrors)
					.pipe(source(b_config.outputName))
					.pipe(gulp.dest(b_config.dest))
					.on('end', reportFinsihed)
		}

		if( global.isWatching ){
			bundler = watchify(bundler);
			bundler.on('update', bundle);
		}

		var reportFinsihed = function(){
			bundleLogger.end(b_config.outputName);


			if( bundleQueueLen ){
				bundleQueueLen --;

				if( bundleQueueLen === 0 ){
					callback();
				}
			}
		};

		bundle();
	}

	var bundleQueue = config.bundleConfigs;
	var bundleQueueLen = bundleQueue.length;
	bundleQueue.forEach(CreateBundle);
});