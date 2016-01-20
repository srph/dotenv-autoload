var find = require('./find')
var dotenv = require('dotenv');

module.exports = function autoload() {
  var path = find();
  dotenv.load({ path: path });
}