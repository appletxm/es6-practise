import _Object$getOwnPropertyDescriptor from "babel-runtime/core-js/object/get-own-property-descriptor";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";

var _desc, _value, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function log(target, name, descriptor) {
  console.info(target, name, descriptor);
}

var People = (_class = function () {
  function People(name, age) {
    _classCallCheck(this, People);

    this.name = name;
    this.age = age;
  }

  _createClass(People, [{
    key: "syaHi",
    value: function syaHi(talker) {
      console.info(talker + " say hi to " + this.name + ", and " + this.name + "'s age is " + this.age);
    }
  }]);

  return People;
}(), (_applyDecoratedDescriptor(_class.prototype, "syaHi", [log], _Object$getOwnPropertyDescriptor(_class.prototype, "syaHi"), _class.prototype)), _class);


export default People;