import _classCallCheck from "babel-runtime/helpers/classCallCheck";
function testable(isTestable) {
  return function (target) {
    target.isTestable = isTestable;
  };
}

// @testable(true)

var MyTestableClass = function MyTestableClass() {
  _classCallCheck(this, MyTestableClass);
};

MyTestableClass.isTestable; // true

// @testable(false)

var MyClass = function MyClass() {
  _classCallCheck(this, MyClass);
};

MyClass.isTestable; // false