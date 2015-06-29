var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function (err, contents) {
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.split('\n').length - 1;
    console.log(lines);
  })
