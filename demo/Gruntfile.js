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
          src: [ '**/*', '!*.less' ],
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

  config.concat = {
    dist: {
      src: [
        'node_modules/jquery/dist/jquery.slim.min.js',
        '../components/**/*.js'
      ],
      dest: 'tmp/main.js'
    }
  };

  config.uglify = {
    scripts: {
      files: {
        'build/main.min.js': [ 'tmp/main.js' ]
      }
    }
  }

  config.less = {
    build: {
      files: {
        'build/style.css': [
          '../styles/build.less',
          '../components/components.less',
          'src/demo.less'
        ]
      }
    }
  }

  config.jekyll = {
    build: {
      options: {
        src: 'tmp',
        dest: 'build'
      },
    }
  };

  config.watch = {
    files: [ 'src/**/*', '../components/**/*' ],
    tasks: [ 'default' ],
    options: {
      atBegin: true,
      spawn: false
    }
  };

  grunt.initConfig(config);

  grunt.registerTask('server', [ 'connect:server' ]);

  grunt.registerTask('default', '', function() {
    grunt.task.run([
      'clean:build',
      'copy:tmp',
      'jekyll:build',
      'concat',
      'uglify',
      'less:build',
      'clean:tmp'
    ]);
  });
}
