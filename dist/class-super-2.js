import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

var PeopleA = function () {
  function PeopleA(name) {
    _classCallCheck(this, PeopleA);

    console.info(new.target);
    this.name = name;
  }

  _createClass(PeopleA, [{
    key: 'sayHello',
    value: function sayHello() {
      console.info('PeopleA:', this);
    }
  }]);

  return PeopleA;
}();

var PeopleB = function () {
  function PeopleB(name) {
    _classCallCheck(this, PeopleB);

    console.info(new.target);
    this.name = name;
  }

  _createClass(PeopleB, [{
    key: 'sayHello',
    value: function sayHello() {
      console.info('PeopleB:', this);
    }
  }]);

  return PeopleB;
}();

var ChildA = function (_PeopleA) {
  _inherits(ChildA, _PeopleA);

  function ChildA(name, age) {
    _classCallCheck(this, ChildA);

    var _this = _possibleConstructorReturn(this, (ChildA.__proto__ || _Object$getPrototypeOf(ChildA)).call(this, name));

    _this.age = age;
    return _this;
  }

  _createClass(ChildA, [{
    key: 'foo',
    value: function foo() {
      _get(ChildA.prototype.__proto__ || _Object$getPrototypeOf(ChildA.prototype), 'sayHello', this).call(this);
      console.info('ChildA:', this);
    }
  }]);

  return ChildA;
}(PeopleA);

var ChildB = function (_PeopleB) {
  _inherits(ChildB, _PeopleB);

  function ChildB(name, age) {
    _classCallCheck(this, ChildB);

    var _this2 = _possibleConstructorReturn(this, (ChildB.__proto__ || _Object$getPrototypeOf(ChildB)).call(this, name));

    _this2.age = age;
    return _this2;
  }

  _createClass(ChildB, [{
    key: 'foo',
    value: function foo() {
      _get(ChildB.prototype.__proto__ || _Object$getPrototypeOf(ChildB.prototype), 'sayHello', this).call(this);
      console.info('ChildB:', this);
    }
  }]);

  return ChildB;
}(PeopleB);

var ca = new ChildA('childa', 50);
var cb = new ChildB('childb', 30);
ca.foo();
cb.foo();
cb.foo.call(ca);

export default {};