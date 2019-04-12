import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import _Promise from 'babel-runtime/core-js/promise';

// function *gen(asyncEvent) {
//   // let promise = asyncEvent()
//   // yield promise
//   // console.info('====', promise)
//   // yield null
//   // yield 'end'
//   var res = yield asyncEvent()
//   yield res
// }

// function asyncFun(asyncEvent) {
//   // let it = gen(asyncEvent)
//   // let res = it.next(it)
//   // console.info(res)
//   // let promise = res.value
//   // promise.then(res => {
//   //   console.info(res)
//   //   it.next(res)
//   // })

//   it = gen(asyncEvent)
//   var a = it.next()
//   console.info(a)
//   var b = it.next()
//   console.info(b)
// }

// asyncFun(time2)

var testAwati = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var test;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return time1();

          case 2:
            test = _context.sent;

            console.info(test);
            console.info('test await end');

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function testAwati() {
    return _ref.apply(this, arguments);
  };
}();
// testAwati()

var it = null;

function time1() {
  return new _Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ a: 3 });
    }, 2000);
  });
}

function time2() {
  setTimeout(function () {
    console.info('====222===', it);
    it && it.next({ a: 3 });
  }, 2000);
}function asyncTest() {
  var _marked = /*#__PURE__*/_regeneratorRuntime.mark(gen);

  var it = null;

  function time2() {
    setTimeout(function () {
      it && it.next({ a: 3 });
    }, 2000);
  }

  function gen() {
    var res;
    return _regeneratorRuntime.wrap(function gen$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.info('async start***');
            _context2.next = 3;
            return time2();

          case 3:
            res = _context2.sent;

            console.info('async get***', res);
            _context2.next = 7;
            return res;

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _marked, this);
  }

  it = gen();
  it.next();
  var res = it.next();
  console.info(res);
}
asyncTest();

var promise = new _Promise(function (resolve) {
  setTimeout(function () {
    console.info('------124--------');
    resolve({ a: 3, then: function then() {
        console.info('========');
      }
    });
  }, 2000);
});
promise.then(function (res) {
  console.info('************');
  console.info(res);
}).catch(function (err) {
  console.info(err);
});

export default {};