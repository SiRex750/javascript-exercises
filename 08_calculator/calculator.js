const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(a) {
	let s = 0;
  for (let i = 0; i < a.length; i++) {
    s += a[i];
  }
  return s;
};

const multiply = function(a) {
  let p = 1;
  for (let i = 0; i < a.length; i++) {
    p *= a[i];
  }
  return p;
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
