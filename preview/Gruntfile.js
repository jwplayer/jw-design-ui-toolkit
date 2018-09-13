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
    main: {
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

  config.jekyll = {
    dist: {
      options: {
        src: 'tmp',
        dest: 'build'
      },
    }
  };

  config.concat = {
    dist: {
      src: [
        'node_modules/jquery/dist/jquery.slim.min.js',
        '../components/**/*.js',
        '../components/components.js'
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
    dist: {
      files: {
        'build/style.css': [
          '../styles/build.less',
          '../components/components.less',
          'src/preview.less'
        ]
      }
    }
  }

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
      'copy',
      'jekyll',
      'concat',
      'uglify',
      'less',
      'clean:tmp'
    ]);
  });
}
