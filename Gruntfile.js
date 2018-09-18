module.exports = function (grunt) {
  'use strict';
  var config = {};
  config.pkg = grunt.file.readJSON('package.json');

  config.watch = {
    files: ['styles/**/*.less', 'icons/dashboard/**/*.svg', 'icons/player/**/*.svg'],
    tasks: ['default']
  };

  config.clean =  {
    all: ['styles/hook.css', 'styles/hook.min.css', 'icons/sprites'],
    nonMinified: 'styles/hook.css'
  };

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

  config.rename = {
    main: {
      files: [
    		{
          src: ['icons/css'],
          dest: 'icons/sprites'
        }
      ]
    }
  };

  config.svg_sprite = {
    dashboard: {
      options: {
        mode: {
          css: {
            bust: false,
            sprite: 'icons-dashboard.svg',
            render: {
              less: true,
              less: {
                dest: '../../../styles/icons-dashboard.less'
              }
            }
          }
        }
      },
      expand: true,
      cwd: 'icons/dashboard',
      src: ['*.svg'],
      dest: 'icons'
    },
    player: {
      options: {
        mode: {
          css: {
            bust: false,
            sprite: 'icons-player.svg',
            render: {
              less: true,
              less: {
                dest: '../../../styles/icons-player.less'
              }
            }
          }
        }
      },
      expand: true,
      cwd: 'icons/player',
      src: ['*.svg'],
      dest: 'icons'
    }
  };

  grunt.initConfig(config);

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-svg-sprite');
  grunt.loadNpmTasks('grunt-contrib-rename');

  grunt.registerTask('default', '', function() {

    var tasks = [
      'clean:all',
      'svg_sprite',
      'rename',
      'less',
      'cssmin',
      'clean:nonMinified',
      'watch'
    ];

    grunt.task.run(tasks);

  });

};
