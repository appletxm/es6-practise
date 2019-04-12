import _Promise from 'babel-runtime/core-js/promise';
var promise = new _Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(false);
  }, 2000);
});

promise.then(function (res) {
  console.info('promise reslove res:', res);
}, function (res) {
  console.info('promise reject res:', res);
}).catch(function (err) {
  console.info('catch catch err:', err);
}).finally(function (res) {
  console.info('finally res:', res);
});

export default {};