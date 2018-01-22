var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var a = array;
  [element , ...a];
  return a;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var b = array;
  b = b.unshift(element);
  return b;
}

function addElementToEndOfArray(array, element) {
  var c = array;
  [...c, element];
  return c;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var d = array;
  d = d.push(element);
  return d;
}