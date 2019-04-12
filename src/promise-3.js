let promise = new Promise(function(resolve, reject) {
  setTimeout(function(){
    reject(false)
  }, 2000)
})

promise.then(res => {
  console.info('promise reslove res:', res)
}, res => {
  console.info('promise reject res:', res)
}).catch(err => {
  console.info('catch catch err:', err)
}).finally(res => {
  console.info('finally res:', res)
})

export default {}