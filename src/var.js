let a = 5
const b = 6


function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    function f() { console.log('I am inside!'); }
  }
  f();
}());

export default {
  a, b
}

