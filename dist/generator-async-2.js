import _regeneratorRuntime from 'babel-runtime/regenerator';
import _Promise from 'babel-runtime/core-js/promise';

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(genFn);

function timer() {
  return new _Promise(function (resolve) {
    setTimeout(function () {
      resolve({ a: 3 });
    }, 2000);
  });
}

function genFn() {
  var obj;
  return _regeneratorRuntime.wrap(function genFn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return timer();

        case 2:
          obj = _context.sent;

          console.info(obj);
          return _context.abrupt('return', obj);

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function spawn(genF) {
  return new _Promise(function (resolve, reject) {
    var gen = genF();

    function step(nextF) {
      var next = void 0;
      try {
        next = nextF();
        console.info('next:', next);
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }

      console.info(next.value instanceof _Promise);

      _Promise.resolve(next.value).then(function (v) {
        step(function () {
          return gen.next(v);
        });
      }, function (e) {
        step(function () {
          return gen.throw(e);
        });
      });
    }

    step(function () {
      return gen.next(undefined);
    });
  });
}

spawn(genFn);

export default {};