let attr = 'my-attr'
let sym = Symbol('symbol attr')
let obj = {
  a:1, 
  b:2, 
  c(){
    console.info('i\'m text')
  },
  [attr](){
    console.info('customer fn name')
  },
  [sym](){
    console.info('symbol attr fn')
  }
}
let {a,b} = obj

Object.defineProperty(obj, 'unenumerable', {value: 3, enumerable: false, writable: true, configurable: true})


console.info('obj====', a, b, obj[attr], obj[sym], Object.getOwnPropertyDescriptors(obj), Object.keys(obj), Object.getOwnPropertyNames(obj), Object.getOwnPropertySymbols(obj))
console.info('obj======', Reflect.ownKeys(obj))
export default obj
