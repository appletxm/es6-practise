let obj1 = {
  a: 1,
  fn1() {
    console.info('obj1 fn1', this.b)
  }
}
let obj2 = {
  b: 2,
  fn2() {
    console.info('obj2 fn2', super.a)
    super.fn1()
  }
}
Object.setPrototypeOf(obj2, obj1)
obj2.fn2()