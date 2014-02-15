module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['attachments/lms/app/App.js','attachments/lms/app/Router.js'],
        dest: 'attachments/lms/app/build.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'attachments/lms/app/build.js',
        dest: 'attachments/lms/app/build.min.js'
      }
    }
  })

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify'])

};