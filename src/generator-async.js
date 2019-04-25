

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

asyncFn()

export default {}
