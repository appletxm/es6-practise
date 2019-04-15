import _Promise from 'babel-runtime/core-js/promise';
var promise = new _Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(false);
  }, 2000);
});

var promise2 = new _Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(true);
  }, 2000);
});

promise.then(function (res) {
  console.info('promise reslove res:', res);
}).catch(function (err) {
  console.info('catch catch err:', err);
  return promise2;
}).then(function (res) {
  console.info('*****', res);
}).then(function (res) {
  console.info('=====', res);
}).finally(function (res) {
  console.info('finally res:', res);
});

export default {};