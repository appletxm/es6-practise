function getFoo () {
  return new Promise(function (resolve, reject){
    resolve('foo');
  });
}

const g = function* () {
  try {
    const foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
};

function run (generator) {
  const it = generator();

  function go(result) {
    if (result.done) return result.value;

    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });
  }

  go(it.next());
}

run(g)

/**
 * notice
 * **/
var promise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve({
      a: 3, 
      then(){
        console.info('====my then====')
      },
      catch() {
        console.info('****my catch****')
      }
    })
  }, 2000)
})
promise.then(res => {
  console.info('************')
  console.info(res)
}).catch(err => {
  console.info('catch:', err)
})

export default {}
