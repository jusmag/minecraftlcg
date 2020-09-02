function lcg(a,c,m,seed,iter) {
  var s = seed;
  for(var i = 0; i < iter; i++) {
    s = ((a * s + c) % m);
  }
  return s;
}

function forwardlcg(seed,iter) {
  var multiplier = 25214903917;
  var increment = 11;
  var period = Math.pow(2,48);
  return lcg(multiplier,increment,period,seed,iter);
}

function reverselcg(seed,iter) {
  var multiplier = 246154705703781;
  var increment = 107048004364969;
  var period = Math.pow(2,48);
  return lcg(multiplier,increment,period,seed,iter);
}

function run() {
  console.log(forwardlcg(3,1));
  console.log(reverselcg(75644711762,1));
}

run();
