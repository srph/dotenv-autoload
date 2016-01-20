var path = require('path');
var fs = require('fs');

module.exports = function find() {
  var dirs = process.cwd().split(path.sep);

  do {
    var current = dirs.join(path.sep);

    if ( !current ) {
      break;
    }

    var env = path.join(current, '.env');

    if ( fs.existsSync(env) ) {
      return fs.readFileSync(env);
    }

    dirs.pop();
  } while (dirs.length);

  throw new Error('No .env file was found');
}