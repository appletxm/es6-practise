const go = function*(){
  yield 1
  yield 2
  yield 3
}

let arr = [...go()]

const obj = {'1': 123, '2': 666, length: 3}

let arr2 = Array.from(obj, x => x+3)

console.info('==spreed=1=', arr2)

// console.info('==spreed==', arr)

export default {}
