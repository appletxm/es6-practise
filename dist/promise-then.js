import _Promise from 'babel-runtime/core-js/promise';
function time1() {
  return new _Promise(function (resolve, reject) {
    resolve({ a: 1 });
  }, 2000);
}

function time2() {
  return new _Promise(function (resolve, reject) {
    reject({ a: 3 });
  }, 2000);
}

function time3() {
  return new _Promise(function (resolve, reject) {
    reject({ a: 5 });
  }, 2000);
}

time1().then(function (res) {
  console.info(res);
  return time2();
}, function (reject) {
  console.info(reject);
}).then(function (res) {
  console.info('---2---', res);
}).catch(function (err) {
  console.info('---1---', err);
}).then(function (res) {
  console.info('---3---', res);
});

export default {};