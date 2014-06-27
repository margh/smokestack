module.exports = (grunt) ->  
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    bower_concat:
      all:
        dest: 'public/js/vendor.js'
        
        dependencies:
          underscore: 'jquery'
          parallax: 'jquery'

        bowerOptions: 
          relative: false

    browserify:
      dist:
        files:
          'public/js/smokestack.js': ['src/client/**/*.coffee']
        options:
          extensions: '.coffee'
          transform: ['coffeeify']

  grunt.loadNpmTasks 'grunt-bower-concat'
  grunt.loadNpmTasks 'grunt-browserify'
  grunt.registerTask 'default', ['bower_concat', 'browserify']