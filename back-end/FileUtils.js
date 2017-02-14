var fs = require("fs");

var readfile = function(file, callback) {
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    callback(data.toString().split("\r\n"));
  });
}

var writefile = function(file, data, callback) {
  fs.writeFile(file, data, (err) => {
    if (err) throw err;
  });
}

module.exports.readfile = readfile;
module.exports.writefile = writefile;
