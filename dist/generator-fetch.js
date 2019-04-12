import _regeneratorRuntime from "babel-runtime/regenerator";
import _Promise from "babel-runtime/core-js/promise";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(gen);

function time1() {
  return new _Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ a: 3 });
    }, 2000);
  });
}

function time2() {
  return new _Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ a: 5 });
    }, 2000);
  });
}

function gen() {
  var a, b;
  return _regeneratorRuntime.wrap(function gen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return time1();

        case 2:
          a = _context.sent;
          _context.next = 5;
          return time2();

        case 5:
          b = _context.sent;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

export default {};