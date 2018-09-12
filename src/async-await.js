function time1 () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(5)
    }, 2000)
  })
}

function time2 () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(8)
    }, 2000)
  })
}

// async function getData(){
//   let data1 = await time1()
//   let data2 = await time2()

//   console.info('=======async', data1, data2)
// }

function spawn (genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF()
    const value = []

    function step () {
      let next

      try {
        next = gen.next()
      } catch(e) {
        return reject(e)
      }

      console.info('========', next)

      if (next.done) {
        return resolve(value)
      }

      Promise.resolve(next.value).then(function (v) {
        console.info('========', v)
        value.push(v)
        step()
      }, function (e) {
        gen.throw(e)
      })
    }

    step()
  })
}

function* myGen(){
  let data1 = yield time1()
  let data2 = yield time2()
}

// spawn(myGen).then(res => {
//   console.info('@@@@@', res)
// })


export default {}
