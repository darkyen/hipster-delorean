var source = './app';
var dest   = './dist';


module.exports = {
	browserSync:{
		server: {
			baseDir: [dest, source]
		},
		files: [
			dest + '/**',
			'!' + dest + '/**.map'
		]
	},
	sass: {
		src: source + '/styles/*.{sass,scss}',
		dest: dest,
		settings: {
			// Muhahaha foolish mortal thou shal read source maps
			// See https://github.com/dlmanning/gulp-sass/issues/81
			sourceComments: 'map',
			imagePath: '/img'
		}
	},
	images: {
		src: source + '/img/**',
		dest: dest + '/img'
	},
	browserify: {
		// Enable sourcemaps
		debug: true,
		extensions: ['.js', '.json', '.jsx'],
		bundleConfigs: [{
			entries: source + '/scripts/app.js',
			dest: dest,
			outputName: 'main.js'
		},{
			skipTransform: true, 
			entries: require('es6ify').runtime,
			dest: dest,
			outputName: 'vendor.js'
		}]
	}
};