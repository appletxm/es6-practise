import _regeneratorRuntime from "babel-runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(main);

function timer() {
  setTimeout(function () {
    it && it.next({ a: 1, b: 2 });
  }, 2000);
}

function main() {
  var res;
  return _regeneratorRuntime.wrap(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return timer();

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var it = main();
var a = it.next();
console.info(a);
var b = it.next();
console.info(b);

export default {};