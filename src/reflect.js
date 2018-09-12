var obj = {a: 555}
var loggedObj = new Proxy(obj, {
  get(target, name) {
    console.log('get', target, name);
    return Reflect.get(target, name);
  },
  deleteProperty(target, name) {
    console.log('delete' + name);
    return Reflect.deleteProperty(target, name);
  },
  has(target, name) {
    console.log('has' + name);
    return Reflect.has(target, name);
  }
})

loggedObj.a
'a' in loggedObj
loggedObj.hasOwnProperty('a')


// let p = {
//   a: 'a'
// };
// let handler = {
//   set(target, key, value, receiver) {
//     console.log('relect=====set');
//     Reflect.set(target, key, value, receiver)
//   },
//   defineProperty(target, key, attribute) {
//     console.log('relect=====defineProperty');
//     Reflect.defineProperty(target, key, attribute);
//   }
// };

// let obj4 = new Proxy(p, handler);
// obj4.a = 'A'

export default {}
