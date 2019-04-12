function time1(){
  return new Promise(function(resolve, reject) {
    resolve({a:1})
  }, 2000)
}

function time2(){
  return new Promise(function(resolve, reject) {
    reject({a:3})
  }, 2000)
}

function time3(){
  return new Promise(function(resolve, reject) {
    reject({a:5})
  }, 2000)
}

time1().then(res => {
  console.info(res)
  return time2()
}, reject => {
  console.info(reject)
}).then(res => {
  console.info('---2---', res)
}).catch(err => {
  console.info('---1---', err)
}).then(res => {
  console.info('---3---', res)
})

export default {}
