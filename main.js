function add(x,y) {
  if(parseInt(y) > parseInt(x)) {
    var temp = x;
    x = y;
    y = temp;
  }
  var stringOne = x;
  var stringTwo = y;
  var stringAnswer = "";
  for(var i = 0; i < stringOne.length + stringTwo.length; i++) { 
    stringAnswer += "0";
  }
  stringAnswer += x;
  console.log(stringTwo);
  console.log(stringAnswer);
  stringAnswer = (stringAnswer.split("")).reverse();
  stringTwo = (stringTwo.split("").reverse());
  for(i = 0; i < stringTwo.length; i++) {
    var tempOne = parseInt(stringAnswer[i]);
    var tempTwo = parseInt(stringTwo[i]);
    var answer = tempOne + tempTwo;
    if(answer >= 10) {
      var remainder = answer % 10;
      stringAnswer[i] = remainder;
      stringAnswer[i+1] = (parseInt(stringAnswer[i+1])+1).toString();
    } else {
      stringAnswer[i] = answer;
    }
  }
  stringAnswer = stringAnswer.reverse().join("");
  stringAnswer = stringAnswer.replace(/^0+/, '');
  console.log(stringAnswer);
}

add("18620301761929499102937091","281474976710656");
