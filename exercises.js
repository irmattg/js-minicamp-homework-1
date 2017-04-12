//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  //return num after subtracting five
  var difference = num - 5;
  return difference;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  if (str1.length === str2.length) {
    return true;
  }
  else {
    return false;
  }
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  if (x === y) {
    return true;
  }
  else {
    return false;
  }
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  if (num < 90) {
    return true;
  }
  else {
    return false;
  }
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  if (num > 50) {
    return true;
  }
  else {
    return false;
  }
}

function add(x, y) {
  //add x and y together and return the value
  var addValue = x + y;
  return addValue;
}

function subtract(x, y) {
  //subtract y from x and return the value
  var subtractValue = x - y;
  return subtractValue;
}

function divide(x, y) {
  //divide x by y and return the value
  var divideValue = x / y;
  return divideValue;
}

function multiply(x, y) {
  //multiply x by y and return the value
  var multiplyValue = x * y;
  return multiplyValue;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  var remainder = x % y;
  return remainder;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  if (num % 2 === 0) {
    return true;
  }
  else {
    return false;
  }

}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  if (num % 2 !== 0) {
   return true;
}
  else {
    return false;
  }
}

function square(num) {
  //square num and return the new value
  var square = Math.pow(num, 2);
  return square;
}

function cube(num) {
  //cube num and return the new value
  var cubed = Math.pow(num, 3);
  return cubed;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  var toPower = Math.pow(num,exponent);
  return toPower;
}

function roundNumber(num) {
  //round num and return it
  var round = Math.round(num);
  return round;
}

function roundUp(num) {
  //round num up and return it
  var goUp = Math.ceil(num);
  return goUp;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  var exclamation = str + '!';
  return exclamation;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  var firstLastName  = firstName + ' ' + lastName;
  return firstLastName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  var hugeString = 'Hello ' + name  + '!';
  return hugeString;
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  var totalRectangle = width * length;
  return totalRectangle;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  var totalTriangle = (base * height)/2;
  return totalTriangle;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  return Math.round(Math.pow(radius, 2) * Math.PI);
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  return length * width * height;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
