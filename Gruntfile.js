/*
 * grunt-bower-version
 * https://github.com/StefanoMagrassi/grunt-bower-version
 *
 * Copyright (c) 2015 Stefano Magrassi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  
  var path = require('path');
  
  // Load Tasks
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Configuration.
  grunt.initConfig({
    
    // JSHint
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    // Clean directories
    clean: {
      tests: ['tmp'],
      
      after_test: ['package.json']
    },
    
    // Prepare for test
    copy: {
      prepare: {
        files: [{
          expand: true,
          cwd: '',
          src: 'package.json',
          dest: '',
          rename: function(dest, src) {
            return path.join(dest, '_' + src);
          }
        }, {
          src: ['test/data/bower.json'],
          dest: 'tmp/bower.json',
        }]
      },
      
      new_pkg: {
        src: ['test/fixtures/package.json'],
        dest: 'package.json',
      },
      
      after: {
        expand: true,
        cwd: '',
        src: '_package.json',
        dest: '',
        rename: function(dest, src) {
          src = src.substring(1);
          
          return path.join(dest, src);
        }
      }
    },

    // Test plugin.
    bower_version: {
      update: ['bower.json']
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Test
  grunt.registerTask('test', ['clean', 'bower_version', 'nodeunit']);

  // Default
  grunt.registerTask('default', ['jshint', 'test']);

};
