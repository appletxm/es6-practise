function timer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({a:3})
    }, 2000)
  })
}

function * genFn() {
  var obj = yield timer()
  console.info(obj)
  return obj
}

function spawn(genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF()

    function step(nextF) {
      let next
      try {
        next = nextF()
        console.info('next:', next)
      } catch (e) {
        return reject(e)
      }
      if (next.done) {
        return resolve(next.value)
      }
      
      console.info(next.value instanceof Promise)

      Promise.resolve(next.value).then(function (v) {
        step(function () {
          return gen.next(v)
        })
      }, function (e) {
        step(function () {
          return gen.throw(e)
        })
      })
    }

    step(function () {
      return gen.next(undefined)
    })
  })
}

spawn(genFn)

export default {}
