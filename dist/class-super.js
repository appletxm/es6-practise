import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _set from 'babel-runtime/helpers/set';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

var People = function () {
  _createClass(People, null, [{
    key: 'stFn',
    value: function stFn() {
      console.info('People static:', this.a);
    }
  }]);

  function People(name) {
    _classCallCheck(this, People);

    console.info(new.target.name, this);
    this.name = name;
  }

  _createClass(People, [{
    key: 'sayHello',
    value: function sayHello() {
      console.info('People:', this.name, 'age is:', this.age);
    }
  }]);

  return People;
}();

People.a = 123;
// People.stFn = () => {
//   console.info('People static:', People.a)
// }

var Worker = function (_People) {
  _inherits(Worker, _People);

  function Worker(name, age) {
    _classCallCheck(this, Worker);

    var _this = _possibleConstructorReturn(this, (Worker.__proto__ || _Object$getPrototypeOf(Worker)).call(this, name));

    _this.age = age;
    _set(Worker.prototype.__proto__ || _Object$getPrototypeOf(Worker.prototype), 'age', 5, _this);
    return _this;
  }

  _createClass(Worker, [{
    key: 'printAge',
    value: function printAge() {
      console.info('Worker:', this.age);
      _get(Worker.prototype.__proto__ || _Object$getPrototypeOf(Worker.prototype), 'sayHello', this).call(this);
    }
  }], [{
    key: 'childSt',
    value: function childSt() {
      _get(Worker.__proto__ || _Object$getPrototypeOf(Worker), 'stFn', this).call(this);
    }
  }]);

  return Worker;
}(People);

var people = new People('xiaoxiao');
var worker = new Worker('xiaoming', 50);
console.info(people, worker);
// People.stFn()
people.sayHello();
Worker.childSt();
worker.printAge();

console.info(global)

export default {};