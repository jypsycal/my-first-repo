var fs = require('fs');
var path = require('path');


module.exports = function (dirPath, ext, callback){
  fs.readdir(dirPath, function (err, list){
    if (err)
      return callback(err);
    var fileResults =[];
    list.forEach(function(file){
      if(path.extname(file) === '.' + ext)
      fileResults.push(file);
    });
    return  callback(null, fileResults);
  });
}
