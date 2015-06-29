var fs = require('fs');
var dir = process.argv[2];
var filetype = process.argv[3];

fs.readdir(dir,  function (err, list) {
    for (var i = 0; i < list.length; i++) {
      if(list[i].indexOf("." + filetype) > -1){
      console.log(list[i]);
      }
    }
  })
