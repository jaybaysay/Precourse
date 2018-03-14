// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  let x = arr.length;

  return arr[x-1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  let x = [];

  for(let i=0; i<arr.length; i++){
    x[i] = arr[i] + 1;
  }

  return x;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);

  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);

  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let arr = words[0];

  for(let i=1; i<words.length; i++){
    arr = arr + ' ' + words[i];
  }

  return arr;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for(let i=0; i<arr.length; i++){
    if(arr[i] === item){
      return true;
    }
  }
  return false;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let x = 0;

  for(let i=0; i<numbers.length; i++){
    x = x + numbers[i];
  }

  return x;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let x = 0;

  for(let i=0; i<testScores.length; i++){
    x = x + testScores[i];
  }

  return x / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let x = numbers[0];

  for(let i=1; i<numbers.length; i++){
    if(x < numbers[i]) {
      x = numbers[i];
    }
  }

  return x;
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  let y = arguments.length;

  if(y === 0) {
    return 0;
  }

  let z = arguments[0];

  for(let i=1; i<y; i++ ) {
    z = z * arguments[i];
  }

  return z;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
