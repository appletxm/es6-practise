class People {
  static stFn() {
    console.info('People static:', this.a)
  }

  constructor(name) {
    console.info(new.target.name)
    this.name = name
  }

  sayHello() {
    console.info('People:', this.name, 'age is:', this.age)
  }
}
People.a = 123
// People.stFn = () => {
//   console.info('People static:', People.a)
// }

class Worker extends People {
  constructor(name, age) {
    super(name)
    this.age = age
    super.age = 5
  }

  printAge() {
    console.info('Worker:', this.age)
    super.sayHello()
  }

  static childSt() {
    super.stFn()
  }
}

let people = new People('xiaoxiao')
let worker = new Worker('xiaoming', 50)
console.info(people, worker)
// People.stFn()
people.sayHello()
Worker.childSt()
worker.printAge()

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

// console.info(global)

// export default {}


