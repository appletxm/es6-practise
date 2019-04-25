import _regeneratorRuntime from "babel-runtime/regenerator";


function asyncFn() {
  var _marked = /*#__PURE__*/_regeneratorRuntime.mark(main);

  var it = null;

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

            console.info(res);
            return _context.abrupt("return", res);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  it = main();
  it.next();
}

asyncFn();

export default {};