function log(target, name, descriptor) {
  console.info(target, name, descriptor)
}

class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  @log
  syaHi(talker) {
    console.info(`${talker} say hi to ${this.name}, and ${this.name}'s age is ${this.age}`)
  }
}

export default People