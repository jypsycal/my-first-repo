var total = 0;
var a = process.argv;
function add(){
for (var i = 2; i < a.length; i++) {
  total += Number(a[i]);
}
}
add()
console.log(total);
