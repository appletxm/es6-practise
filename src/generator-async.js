let it = null

function time1() {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve({a: 3})
    }, 2000)
  })
}

function time2 () {
  setTimeout(function(){
    console.info('====222===', it)
    it && it.next({a: 3})
  }, 2000)
}

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

async function testAwati() {
  let test = await time1()
  console.info(test)
  console.info('test await end')
}
// testAwati()

function asyncTest() {
  let it = null

  function time2 () {
    setTimeout(function(){
      it && it.next({a: 3})
    }, 2000)
  }

  function *gen() {
    console.info('async start***')
    let res = yield time2()
    console.info('async get***', res)
    yield res
  }

  it = gen()
  it.next()
  let res = it.next()
  console.info(res)
}
asyncTest()

var promise = new Promise((resolve) => {
  setTimeout(function(){
    console.info('------124--------')
    resolve({a: 3, then(){console.info('========')}})
  }, 2000)
})
promise.then(res => {
  console.info('************')
  console.info(res)
}).catch(err => {
  console.info(err)
})

export default {}