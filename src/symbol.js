let s1 = Symbol('foo')
let s2 = Symbol('bar')

let obj = {}
obj[s1] = '55555'

console.info(`symbole obj[s1] ${obj[s1]}`)

// let iframe = document.createElement('iframe')
// iframe.src = 'https://www.baidu.com'
// document.body.appendChild(iframe)

// console.info('******Symbol for:', iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo'))
class MyClass {
  [Symbol.hasInstance](foo) {
    console.info('====call instanceof', foo)
    return foo instanceof Array
  }
}

let symbolInternal = {
  [Symbol.hasInstance](foo) {
    console.info('====call instanceof obj', foo)
    return foo instanceof Array
  }
}

let myClass = new MyClass()
console.info(myClass)
console.info('====symbol instanceof:', [1, 2, 3] instanceof symbolInternal)

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
let arr2new = ['a', 'b'].concat(arr2, 'e')
arr2[Symbol.isConcatSpreadable] = true
let arr3new = ['a', 'b'].concat(arr2, 'e')

console.info('====symbol isConcatSpereadable', arr2new, arr3new)

class MyArray extends Array {
  constructor(arg){
    super(arg)
  }
  // static get [Symbol.species]() { 
  //   return Array
  // }
}
const a = new MyArray(1, 2, 3);
const b = a.map(x => x);
const c = a.filter(x => x > 1);

console.info('====symbol species', a instanceof MyArray)
console.info('====symbol species', b instanceof Array)
console.info('====symbol species', c instanceof Array)

const x = {};
x[Symbol.replace] = (...s) => console.log('====symbol replace', s);
'Hello'.replace(x, 'World') // ["Hello", "World"]

const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
const IteratorFn = class {
  constructor(arr){
    this.arr = arr
  }

  *[Symbol.iterator](){
    console.info('@@@@@@@@@@@@')
    for(let i = 0; i<this.arr.length; i++){
      yield i
    }
  }
}
const iteratorMe = new IteratorFn([1,2,3,4,5])
console.log('=====symbol interator:', [...iteratorMe])
console.log('====symbol iterator', [...myIterable])

export default obj
