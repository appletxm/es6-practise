function Person(name) {
  this.name = name;
  this.color = ['red', 'green', 'yellow'];
}
Person.prototype.sayHi = function () {
  console.info('Hi ' + this.name);
};

function Worker(name, age) {
  Person.call(this, name);
  this.age = age;
}
Worker.prototype.__proto__ = Person.prototype;
Worker.prototype.getAge = function () {
  console.info('Age is ' + this.age);
};
var worker = new Worker('txm', 30);
console.info(worker);
// console.info(new Person('txm'))

function Farmer(name, age, tool) {
  Person.bind(this, [name]);
  this.age = age;
  this.tool = tool;
}
Farmer.prototype.__proto__ = Person.prototype;
Farmer.prototype.getTool = function () {
  console.info('Tool is ' + this.tool);
};
var farmer = new Farmer('txm', 30, 'knife');
console.info(farmer);

function Me(name, age, tall) {
  Worker.call(this, name, age);
  this.tall = tall;
}
Me.prototype.__proto__ = Worker.prototype;
Me.prototype.printTall = function () {
  console.info(this.tall);
};
var me = new Me('mm', 40, 187);
console.info(me);

export default {
  Person: Person,
  Worker: Worker,
  Me: Me
};