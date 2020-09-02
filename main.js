function lcg(a,c,m,seed,iter) {
  var s = seed;
  var output = "";
  output += s;
  for(var i = 0; i < iter; i++) {
    s = ((a * s + c) % m);
    output += ",";
    output += s;
  }
  console.log(output);
  return(s);
}

var a = 25214903917;
var c = 11;
var m = Math.pow(2,48);
lcg(a,c,m,3511347017271779066,11);
