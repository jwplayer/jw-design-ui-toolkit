module.exports = function(grunt) {
  'use strict';

  var config = {};

  require('load-grunt-tasks')(grunt);

  config.connect = {
    server: {
      options: {
        hostname: 'localhost',
        port: 4000,
        base: 'build',
        useAvailablePort: false,
        keepalive: true
      }
    }
  };

  config.clean = {
    tmp: [ 'tmp' ],
    build: [ 'build' ]
  };

  config.copy = {
    tmp: {
      files: [
        {
          cwd: 'src/',
          src: 'index.html',
          dest: 'tmp/',
          expand: true
        },
        {
          cwd: '../components/',
          src: '**/*.html',
          dest: 'tmp/_includes',
          expand: true,
          flatten: true
        }
      ]
    }
  };

  config.jekyll = {
    build: {
      options: {
        src: 'tmp',
        dest: 'build'
      },
    }
  }

  grunt.initConfig(config);
  grunt.registerTask('server', [ 'connect:server' ]);
  grunt.registerTask('default', '', function() {
    grunt.task.run([
      'clean:build',
      'copy:tmp',
      'jekyll:build',
      'clean:tmp'
    ]);
  });
}
