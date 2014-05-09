module.exports = function(grunt) {


// Load NPM tasks and options
	var Helpers = require('./tasks/helpers'),
		config = Helpers.config,
		filterAvailable = Helpers.filterAvailableTasks,
		_ = grunt.util._;

	config = _.extend(config, Helpers.loadConfig('./tasks/options/'));

	require('load-grunt-tasks')(grunt);
	grunt.loadTasks('tasks');


// Register tasks
	grunt.registerTask('default', function () {
		grunt.task.run([
			'clean',
			'sass',
			'autoprefixer',
			'jekyll:build',
			'watchTasks'
		]);
		grunt.log.writeln('Everything built. All done!');
	});


	grunt.registerTask('watchTasks', function(){
		grunt.log.writeln('Starting!');

		var done = this.async();

		setTimeout(function () {
			grunt.task.run(['watch:sass']);
			grunt.log.writeln('CSS built. All done!');
			done();
		}, 1000);

		setTimeout(function () {
			grunt.task.run(['watch:jekyll']);
			grunt.log.writeln('HTML built. All done!');
			done();
		}, 1000);
	});


	grunt.initConfig(config);
};