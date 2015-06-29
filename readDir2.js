var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var ext = process.argv[3];
var mymodule = require('./funcmodule.js');
var callback = function(err, data) {
  if (err)
    console.log(error);
    data.forEach(function(file){
      console.log(file);
    })    
}

mymodule(dirPath, ext, callback);
