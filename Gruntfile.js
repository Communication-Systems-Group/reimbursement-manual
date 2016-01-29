// Generated on 2016-01-10 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	grunt.loadNpmTasks('grunt-war');

	grunt.loadNpmTasks('grunt-exec');

	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.loadNpmTasks('grunt-wiredep');

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.loadNpmTasks('grunt-wiredep-copy');

	// Define the configuration for all the tasks
	grunt.initConfig({

		exec: {
			execute_htlatex: 'htlatex manual.tex "config.cfg"',
		},

		copy: {
			main: {
				files: [
					{expand: true, src: ['manual.html'], dest: 'dist/'},
					{expand: true, src: ['images/*'], dest: 'dist/'}
				],
			},
			lightbox: {
				files: [
					{src: ['lightbox/*'], dest: 'dist/'},
				]
			}
		},

		wiredepCopy: {
			target: {
				options: {
					src: '.',
					dest: 'dist',
					wiredep: {}
				}
			},
		},

		clean : {
			before_latex_gen: {
				src: [
					'dist/*'
				]
			},
			after_latex_gen: {
				src: [
					'*.4ct',
					'*.4tc',
					'*.aux',
					'*.css',
					'*.dvi',
					'*.html',
					'*.idv',
					'*.lg',
					'*.log',
					'*.tmp',
					'*.xref'
				]
			}
		},

		wiredep: {
			task: {
				src: [
					'manual.html'
				],
				options: {
					src: 'manual.html'
				}
			}
		},

		war: {
			target: {
				options: {
					war_dist_folder: 'dist',
					war_name: 'reimbursement-manual',
					war_verbose: true,
					webxml_welcome: 'manual.html',
					webxml_display_name: 'Reimbursement manual'
				},
				files: [
					{
						expand: true,
						cwd: 'dist',
						src: ['**'],
						dest: '.'
					}
				]
			}
		},

		http_upload: {
			deploy: {
				options: {
					url: 'http://<%=deploy.username%>:<%=deploy.password%>@192.41.136.227/manager/text/deploy?path=manual&update=true',
					method: 'PUT',
					rejectUnauthorized: true
				},
				src: 'dist/reimbursement-manual.war',
				dest: 'reimbursement-manual'
			}
		}
	});

	grunt.registerTask('build', [
		'clean:before_latex_gen',
		'exec:execute_htlatex',
		'wiredep',
		'copy:main',
		'copy:lightbox',
		'wiredepCopy',
		'clean:after_latex_gen',
		'war'
	]);
};
