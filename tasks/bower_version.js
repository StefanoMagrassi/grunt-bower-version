/*
 * grunt-bower-version
 * https://github.com/StefanoMagrassi/grunt-bower-version
 *
 * Copyright (c) 2015 Stefano Magrassi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('bower_version', 'Grunt plugin to sync bower.json version with package.json version', function() {
    var pkg       = grunt.file.readJSON('package.json'),
        bowerFile = this.data.length ? this.data[0] : 'bower.json',
        bowerJSON;
    
    if (!grunt.file.exists(bowerFile)) {
      grunt.fatal('Bower file does not exist!');
    }
    
    bowerJSON         = grunt.file.readJSON(bowerFile);
    bowerJSON.version = pkg.version;
    
    grunt.file.write(bowerFile, JSON.stringify(bowerJSON, null, 2));
    grunt.log.writeln('File "' + bowerFile + '" updated.');
  });

};
