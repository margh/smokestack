module.exports = (grunt) ->
  grunt.initConfig
    env:
      default:
        push:
          PATH:
            value: './node_modules/.bin'
            delimiter: ':'

    bower_concat:
      all:
        dest: 'public/js/vendor.js'
        bowerOptions:
          relative: false
        exclude: [
          'font-awesome'
        ]

    # Converts html templates into js angular templates
    html2js:
      app:
        options:
          rename: (name) ->
            name = name.replace 'client/', ''
            name = name.replace '.html', ''
            return name
        src: ['src/client/templates/**/*.html']
        dest: 'public/js/templates.js'

    # Compiles coffee into browser-ready js
    browserify:
      app:
        files: 'public/tmp/core.js': ['src/client/entry.coffee']
        options:
          transform: ['coffeeify']
          browserifyOptions:
            extensions: ['.coffee']
            debug: true

      # Compiles all debug js files into one prod ready js file
      dist:
        options:
          sourceMap: false
        files:
          'public/js/smokestack.js': [
            'public/tmp/lib.js'
            'public/tmp/templates.js'
            'public/tmp/core.js'
          ]

    less:
      app:
        files:
          'public/tmp/custom.css': 'src/server/styles/styles.less'

    # Compiles all custom and dep styles into one css file
    cssmin:
      app:
        files:
          'public/css/styles.css': [
            'bower_components/font-awesome/css/font-awesome.css'
            'public/tmp/custom.css'
          ]

    # Copy fonts from libraries
    copy:
      fonts:
        files: [
          {
            cwd: 'bower_components/font-awesome/fonts/'
            src: ['*']
            dest: 'public/fonts'
            expand: true
            filter: 'isFile'
          }
        ]

    # Watch these files and re-run the specified tasks when they change
    watch:
      browserify:
        files: ['src/client/**/*.coffee']
        tasks: ['build:js']
      templates:
        files: ['src/client/templates/**/*.html']
        tasks: ['html2js']
      less:
        files: ['src/client/less/**/*.less']
        tasks: ['less:app', 'build:css']
      server:
        files: ['src/server/**/*.coffee']
        tasks: ['server:dev']

    # Cleans (deletes files in) these folders
    clean:
      all: ['public']
      dev: ['public/tmp/*']
      dist: ['public/tmp']

    # Runs the Express server
    express:
      dev:
        options:
          port: 40080
          opts: ['node_modules/coffee-script/bin/coffee']
          script: 'src/server/server.coffee'

  grunt.loadNpmTasks 'grunt-bower-concat'
  grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-env'
  grunt.loadNpmTasks 'grunt-express-server'
  grunt.loadNpmTasks 'grunt-html2js'
  grunt.loadNpmTasks 'grunt-newer'

  grunt.registerTask 'server:dev', [
    'express:dev'
  ]

  grunt.registerTask 'build:js', [
    'browserify:app'
    'browserify:dist'
    'html2js:app'
  ]

  grunt.registerTask 'build:css', [
    'cssmin:app'
  ]

  grunt.registerTask 'build:dev', [
    'clean:dev'
    'bower_concat'
    'build:js'
    'less:app'
    'build:css'
    'newer:copy:fonts'
  ]

  grunt.registerTask 'build:dist', [
    'clean:all'
    'bower_concat'
    'build:js'
    'less:app'
    'build:css'
    'copy:fonts'
    'clean:dist'
  ]

  grunt.registerTask 'dev', ['build:dev', 'server:dev', 'watch']
  grunt.registerTask 'dist', ['build:dist']
  grunt.task.run 'env:default'