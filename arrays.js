var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var a = array;
  var newA = a.unshift(element);
  return newA;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var b = array;
  b = b.unshift(element);
  return b;
}

function addElementToEndOfArray(array, element) {
  var c = array;
  var newC = c.push(element);
  return newC;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var d = array;
  d = d.push(element);
  return d;
}