module.exports = function (grunt) {
  'use strict';
  var config = {};
  config.pkg = grunt.file.readJSON('package.json');

  config.watch = {
    files: ['styles/**/*.less', 'icons/dashboard/**/*.svg', 'icons/player/**/*.svg'],
    tasks: ['default']
  };

  config.clean =  {
    all: ['styles/build.css', 'styles/build.min.css', 'icons/sprites']
  };

  config.less = {
    build: {
      files: { 'styles/build.css' : 'styles/build.less' }
    }
  };

  config.cssmin = {
    build: {
      options: { keepSpecialComments: 0 },
      files: { 'styles/build.min.css': 'styles/build.css' }
    }
  };

  config.copy = {
    main: {
      files: [
        {
          expand: true,
          cwd: 'icons/sprites',
          src: ['**/*'],
          dest: 'preview-mode/src/sprites'
        },
      ]
    }
  }

  config.svgstore = {
    dashboard: {
      files: { 'icons/sprites/icons-dashboard.svg' : ['icons/dashboard/**/*.svg'] }
    },
    player: {
      files: { 'icons/sprites/icons-player.svg' : ['icons/player/**/*.svg'] }
    }
  };

  grunt.initConfig(config);

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-svgstore');

  grunt.registerTask('default', '', function() {

    var tasks = [
      'clean:all',
      'svgstore',
      'copy',
      'less',
      'cssmin',
      'watch'
    ];

    grunt.task.run(tasks);

  });

};
