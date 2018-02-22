var fs = require('fs')
  , os = require('os')
  , tmpdir = os.tmpdir()
  , path = require('path')
  , crypto = require('crypto');

function tempFilePath(filepath) {
  return path.join(filepath || tmpdir, crypto.randomBytes(16).toString('hex'));
}

exports.writeTempFile = function(str) {
  var fullpath = tempFilePath();

  fs.writeFileSync(fullpath, str);

  return fullpath;
};

exports.escapeSingleQuotes = function(str) {
  if(!str) {
    return str;
  }

  return str.replace(/'/g, "'\\''");
};
