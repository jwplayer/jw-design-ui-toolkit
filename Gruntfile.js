module.exports = function (grunt) {
  'use strict';
  var config = {};
  config.pkg = grunt.file.readJSON('package.json');

  config.watch = {
    files: ['styles/**/*.less'],
    tasks: ['default']
  };

  config.clean =  {
    all: ['styles/hook.css', 'styles/hook.min.css'],
    nonMinified: 'styles/hook.css'
  }

  config.less = {
    build: {
      files: {
        'styles/hook.css' : 'styles/hook.less'
      }
    }
  };

  config.cssmin = {
    build: {
      options: {
        keepSpecialComments: 0
      },
      files: {
        'styles/hook.min.css': 'styles/hook.css'
      }
    }
  };

  grunt.initConfig(config);

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', '', function() {

    var tasks = [
      'clean:all',
      'less',
      'cssmin',
      'clean:nonMinified',
      'watch'
    ];

    grunt.task.run(tasks);

  });

};
