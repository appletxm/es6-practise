class MyClass {
  constructor (name) {
    this.name = name
  }

  printName () {
    console.info('name is:', this.name)
  }
}

class SubClass extends MyClass {
  constructor (name) {
    super(name)
  }
}
