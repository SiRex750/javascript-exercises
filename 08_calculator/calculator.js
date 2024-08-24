const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(a) {
	return a.reduce((sum, currentValue) => sum += currentValue, 0);
};

const multiply = function(a) {
  return a.reduce((product, currentValue) => product *= currentValue, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(a) {
	let f = 0;
  if (a === 0) {
    return 1;
  }
  else {
    return a * factorial(--a);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
