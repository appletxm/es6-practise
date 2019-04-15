

function asyncFn() {
  let it = null

  function timer() {
    setTimeout(function(){
      it && it.next({a: 1, b: 2})
    }, 2000)
  }
  
  function * main () {
    let res = yield timer()
    console.info(res)
    return res
  }

  it = main()
  it.next()
}

// asyncFn()

function param1() {
  return 1
}

function param2() {
  return 2
}

function invokCall(a, b) {
  return a + b
}

function * fn1() {
  let res = invokCall(yield param1(), yield param2())
  console.info('res', res)
  return res
}
let fnIt = fn1()
let step1 = fnIt.next()
console.info(step1)
console.info('step1:', step1)
let step2 = fnIt.next(step1.value)
console.info('step2:', step2)
let step3 = fnIt.next(step2.value)
console.info('step3:', step3)

export default {}
