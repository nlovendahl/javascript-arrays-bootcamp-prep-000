var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var myArray = array;
  var newArray = myArray.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) var myArray = array;
  myArray = myArray.unshift(element);
  return myArray;
}