var rewire = require('rewire');
var expect = require('chai').expect;
var sinon = require('sinon');
var autoload = rewire('../lib/autoload');
var dotenv = require('dotenv');

describe('autoload', function() {
  it('should autoload', function() {
    var revert = autoload.__set__('find', function() { return 'qwerty'; });
    sinon.stub(dotenv, 'load'); // Use stub so it doesn't actually run

    autoload();
    expect(dotenv.load.calledWith({ path: 'qwerty' })).to.be.true;

    revert();
  });
});
