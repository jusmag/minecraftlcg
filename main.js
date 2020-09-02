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
  var stringSmaller = tempTwo;
  var stringLarger = tempOne;
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

function divide(x,y) {
  var stringOne = "";
  var stringTwo = "";
  var stringAnswer = "";
  var remainder = "";
  stringOne += x;
  stringTwo += y;
  if(parseInt(stringTwo) > parseInt(stringOne)) {
    var temp = stringOne;
    stringOne = stringTwo;
    stringTwo = temp;
  }
  if(parseInt(stringTwo) > (9007199254740991 / 9)) {
    console.log("Sorry, your numbers are too big...");
    return 0;
  }
  var divisor = "";
  var index = 0;
  while(divisor < parseInt(stringTwo)) {
    divisor += stringOne[index];
    index++;
  }
  var multiplier = 0;
  for(var i = index; i <= stringOne.length; i++) {
    for(var j = 0; j <= 10; j++) {
      if(parseInt(stringTwo) * j > divisor) {
        stringAnswer += (j-1).toString();
        divisor = subtract(divisor, (parseInt(stringTwo) * (j-1)).toString());
        break;
      }
    }
    index = i;
    if(i != stringOne.length) {
      divisor += stringOne[index];
    }
  }
  var answers = [];
  if(divisor == "") {
    divisor = "0";
  }
  remainder = divisor;
  answers[0] = stringAnswer;
  answers[1] = remainder;
  console.log(stringOne + " divided by " + stringTwo + " is:");
  console.log(stringAnswer + " remainder " + remainder);
  return answers;
}

var d = divide("123409804295843545430958354", "223435080542098");

