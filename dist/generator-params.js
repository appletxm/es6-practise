import _regeneratorRuntime from 'babel-runtime/regenerator';

var _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(fn1);

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
            return _context.abrupt('return', res);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  it = main();
  it.next();
}

// asyncFn()

function param1() {
  return 1;
}

function param2() {
  return 2;
}

function invokCall(a, b) {
  return a + b;
}

function fn1() {
  var res;
  return _regeneratorRuntime.wrap(function fn1$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = invokCall;
          _context2.next = 3;
          return param1();

        case 3:
          _context2.t1 = _context2.sent;
          _context2.next = 6;
          return param2();

        case 6:
          _context2.t2 = _context2.sent;
          res = (0, _context2.t0)(_context2.t1, _context2.t2);

          console.info('res', res);
          return _context2.abrupt('return', res);

        case 10:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}
var fnIt = fn1();
var step1 = fnIt.next();
console.info(step1);
console.info('step1:', step1);
var step2 = fnIt.next(step1.value);
console.info('step2:', step2);
var step3 = fnIt.next(step2.value);
console.info('step3:', step3);

export default {};