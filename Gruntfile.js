module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*cssmin: {
            compress: {
                files: {
                    'source/css/bootstrap.min.css': ['components/bootstrap/docs/assets/css/bootstrap.css']
                }
            }
        },*/
        jekyll : {
            prod: {
                src: './source',
                dest: '../site'
            }
        }/*,
        uglify: {
            options: {
                banner: '*//*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> *//**//*\nhttps://github.com/Serhioromano/bootstrap-tags.git\n'
            },
            build: {
                src: 'components/bootstrap/docs/assets/js/bootstrap.js',
                dest: 'js/bootstrap.min.js'
            }
        }*/
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jekyll');

    // Default task(s).
    grunt.registerTask('default', ['jekyll:prod']);

};