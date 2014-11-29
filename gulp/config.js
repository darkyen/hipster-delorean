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
		src: source + '/styles/main.scss',
		dest: dest,
		settings: {
			trace: true,
			compass: true,
			loadPath: [
				'./node_modules/bootstrap-sass/assets/stylesheets/'
			],
			style: 'compressed',
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