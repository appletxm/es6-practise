function * helloWorldGenerator () {
  console.info('@@@@@@@@@@')

  yield 'hello'
  yield 'world'
  yield 'purple'
  return 'ending'
}

var hw = helloWorldGenerator()
console.info('######gen1', hw.next())
console.info('######gen1', hw.next())
console.info('######gen1', hw.next())
console.info('######gen1', hw.next())

function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

function time1(arg){
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve(arg)
    }, 2000)
  })
}

function time2(arg){
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve(8+arg)
    }, 5000)
  })
}

function* gen(arg){
  var step1 = yield time1(arg)
  yield time2(step1)
}
var gen66 = gen(9)
gen66.next().value.then(res => {
  console.info('######gen66', res)
  return gen66.next(res).value
}).then(res => {
  console.info('######gen66', res)
})


export default {}
