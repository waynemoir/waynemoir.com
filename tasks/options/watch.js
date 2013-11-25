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
			'./_posts/**',
			'./_layouts/**',
			'./_includes/**',
			'./index.html',
			'./articles.html',
			'./resources.html'
		],
		tasks: ['jekyll:build']
	}


};