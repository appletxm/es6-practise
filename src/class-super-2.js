class PeopleA {
  constructor(name) {
    console.info(new.target)
    this.name = name
  }

  sayHello() {
    console.info('PeopleA:', this)
  }
}

class PeopleB {
  constructor(name) {
    console.info(new.target)
    this.name = name
  }

  sayHello() {
    console.info('PeopleB:', this)
  }
}

class ChildA extends PeopleA {
  constructor(name, age) {
    super(name)
    this.age = age
  }

  foo() {
    super.sayHello()
    console.info('ChildA:', this)
  }
}

class ChildB extends PeopleB {
  constructor(name, age) {
    super(name)
    this.age = age
  }

  foo() {
    super.sayHello()
    console.info('ChildB:', this)
  }
}

let ca = new ChildA('childa', 50)
let cb = new ChildB('childb', 30)
ca.foo()
cb.foo()
cb.foo.call(ca)

export default {}


