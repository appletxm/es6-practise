import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Symbol$iterator from 'babel-runtime/core-js/symbol/iterator';

var obj = {
	a: 1,
	b: 2,
	c: 3
};

obj[_Symbol$iterator] = function () {
	var _ref;

	var keys = _Object$keys(this);
	var currentIndex = 0;
	var obj = this;

	return _ref = {}, _defineProperty(_ref, _Symbol$iterator, function () {
		return this;
	}), _defineProperty(_ref, 'next', function next() {
		var item = void 0;

		console.info(keys, currentIndex, obj);

		if (currentIndex >= keys.length) {
			return { done: true, value: undefined };
		} else {
			item = obj[keys[currentIndex++]];
			console.info('next fun call', item);
			return { done: false, value: item };
		}
	}), _defineProperty(_ref, 'return', function _return(v) {
		console.info('return fun call', { done: !v, value: v });
		return { done: !v, value: v };
	}), _ref;
};