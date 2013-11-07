module.exports = {


	options: {
		livereload: true,
	},


	sass:{
		files: [
			'./css/**/*.scss'
		],
		tasks: ['sass:development', 'autoprefixer:development', 'copy:css']
	},


	jekyll:{
		files: [
			'_posts/**',
			'_layouts/**'
		],
		tasks: ['jekyll:build']
	}


};