import _Symbol from 'babel-runtime/core-js/symbol';
var s1 = _Symbol('foo');
var s2 = _Symbol('bar');

s1; // Symbol(foo)
s2; // Symbol(bar)

console.info(s1.toString()); // "Symbol(foo)"
console.info(s2.toString()); // "Symbol(bar)"