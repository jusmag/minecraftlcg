function add(x,y) {
  var stringOne = x;
  var stringTwo = y;
  if(parseInt(stringTwo) > parseInt(stringOne)) {
    var temp = stringOne;
    stringOne = stringTwo;
    stringTwo = temp;
  }
  var stringAnswer = "";
  for(var i = 0; i < stringOne.length + stringTwo.length; i++) { 
    stringAnswer += "0";
  }
  stringAnswer += stringOne;
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
  return(stringAnswer);
}

function subtract(x,y) {
  var stringOne = x;
  var stringTwo = y;
  if(parseInt(stringTwo) > parseInt(stringOne)) {
    var temp = stringOne;
    stringOne = stringTwo;
    stringTwo = temp;
  }
  var stringAnswer = "";
  for(var i = 0; i < stringOne.length + stringTwo.length; i++) { 
    stringAnswer += "0";
  }
  stringAnswer += stringOne;
  stringAnswer = (stringAnswer.split("")).reverse();
  stringTwo = (stringTwo.split("").reverse());
  for(i = 0; i < stringTwo.length; i++) {
    var tempOne = parseInt(stringAnswer[i]);
    var tempTwo = parseInt(stringTwo[i]);
    var answer = tempOne - tempTwo;
    if(answer < 0) {
      var remainder = 10 + answer;
      stringAnswer[i] = remainder;
      stringAnswer[i+1] = (parseInt(stringAnswer[i+1])-1).toString();
    } else {
      stringAnswer[i] = answer;
    }
  }
  stringAnswer = stringAnswer.reverse().join("");
  stringAnswer = stringAnswer.replace(/^0+/, '');
  return(stringAnswer);
}

function multiply(x,y) {
  var tempOne = x, tempTwo = y;
  if(parseInt(y) > parseInt(x)) {
    var temp = tempOne;
    tempOne = tempTwo;
    tempTwo = temp;
  }
  var stringSmaller = "";
  var stringLarger = "";
  stringSmaller += tempTwo;
  stringLarger += tempOne;
  //console.log(stringSmaller);
  //console.log(stringLarger);
  if(parseInt(stringSmaller) > (9007199254740991 / 9)) {
    console.log("sorry, your numbers are just too large...");
    return 0;
  }
  var stringAnswer = "";
  for(var i = 0; i < stringSmaller.length + stringLarger.length + 4; i++) {
    stringAnswer += "0";
  }
  stringLarger = stringLarger.split("").reverse();
  for(var i = 0; i < stringLarger.length; i++) {
    var answer = (parseInt(stringLarger[i]) * parseInt(stringSmaller)).toString();
    if (parseInt(answer) == 0) {
      continue;
    }
    for(var j = 0; j < i; j++) {
      answer += "0";
    }
    stringAnswer = add(answer, stringAnswer);
  }
  //console.log(stringAnswer);
  return stringAnswer;
}

var t = multiply("2461547057037816543224615470570", "75644711762");
