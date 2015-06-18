'use strict';

var grunt = require('grunt');

exports.bower_version = {
  update: function(test) {
    // TODO
    test.expect(1);

    var actual   = grunt.file.readJSON('tmp/bower.json').version;
    var expected = grunt.file.readJSON('test/expected/bower.json').version;
    
    test.equal(actual, expected, 'should have the same version number');

    test.done();
  }
};
