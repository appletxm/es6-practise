let promise = new Promise(function(resolve, reject) {
  setTimeout(function(){
    reject(false)
  }, 2000)
})

let promise2 = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve(true)
  }, 2000)
})

promise.then(res => {
  console.info('promise reslove res:', res)
}).catch(err => {
  console.info('catch catch err:', err)
  return promise2
}).then(res => {
  console.info('*****', res)
}).then(res => {
  console.info('=====', res)
}).finally(res => {
  console.info('finally res:', res)
})

export default {}