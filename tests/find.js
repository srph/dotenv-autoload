var rewire = require('rewire');
var expect = require('chai').expect;
var sinon = require('sinon');
var find = rewire('../lib/find');
var fs = require('fs');

describe('find', function() {
  it('should return find env file', function() {
    var revert = find.__set__('fs', {
      readFileSync: function() {
        return 'GREETING=HELLO WORLD'
      },

      existsSync: function() {
        return true;
      }
    });

    expect(find()).to.equal('GREETING=HELLO WORLD');

    revert();
  });

  it('should throw if env file was not found', function() {
    var revert = find.__set__('fs', {
      existsSync: function() {
        return false;
      }
    });

    sinon.spy(fs, 'readFileSync');

    expect(function() { find(); }).to.throw(/No .env file was found/i);
    expect(fs.readFileSync.calledOnce).to.be.false;

    fs.readFileSync.restore();
    revert();
  });
});