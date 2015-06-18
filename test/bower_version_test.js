'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.bower_version = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  update: function(test) {
    // TODO
    test.expect('1.2.3');

    var actual   = grunt.file.readJSON('tmp/bower.json').version;
    var expected = grunt.file.readJSON('test/expected/bower.json').version;
    
    test.equal(actual, expected, 'should have the same version number');

    test.done();
  }
};
