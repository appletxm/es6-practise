import _Object$setPrototypeOf from 'babel-runtime/core-js/object/set-prototype-of';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _get from 'babel-runtime/helpers/get';

var _obj;

var obj1 = {
  a: 1,
  fn1: function fn1() {
    console.info('obj1 fn1', this.b);
  }
};
var obj2 = _obj = {
  b: 2,
  fn2: function fn2() {
    console.info('obj2 fn2', _get(_obj.__proto__ || _Object$getPrototypeOf(_obj), 'a', this));
    _get(_obj.__proto__ || _Object$getPrototypeOf(_obj), 'fn1', this).call(this);
  }
};
_Object$setPrototypeOf(obj2, obj1);
obj2.fn2();

export default {};