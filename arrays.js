
// Commented out things are the things not working

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var newArray= [element, ...array]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray= [...array, element]
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

// function accessElementInArray (array, ind) {
//   console.log(array[ind]);
// }


function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  arr = arr.slice[1];
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  newArrarr = arr.pop()
  return arr;
}
