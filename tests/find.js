var expect = require('chai').expect;
var sinon = require('sinon');
var mock = require('mock-fs');
var find = require('../lib/find');
var path = require('path');
var fs = require('fs');

describe('find', function() {
  it('should return path of env file in the cwd', function() {
    var env = process.cwd() + '/.env';
    var _fs = {};
    _fs[env] = 'DOTENV=file';
    mock(_fs);

    expect(find()).to.equal(env);

    mock.restore();
  });

  it('should recursively find path of env file', function() {
    var env = path.resolve(process.cwd(), '../', '.env');
    var _fs = {};
    _fs[env] = 'DOTENV=file';
    mock(_fs);

    expect(find()).to.equal(env);

    mock.restore();
  });

  it('should throw if env file was not found', function() {
    sinon.stub(fs, 'existsSync').returns(false);

    expect(function() { find(); }).to.throw(/No .env file was found/i);

    fs.existsSync.restore();
  });
});
