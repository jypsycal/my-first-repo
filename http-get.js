var http = require('http');
var bl =require('bl');
var urlList = process.argv;
var urlQueue = {};

for (var i = 2; i < urlList.length; i++) {
  var count = urlList.length - 2;
  http.get(process.argv[i], function (response) {
    response.pipe(bl(function (err, data){
      data = data.toString();
      console.log(data);
      urlQueue[response] = data;
      count--;
    //  urlQueue.splice(i-2, 0, data);
      }));
});
}
console.log(urlQueue);
//var count = urlList.length - 2;
//var urlQueue = {};
