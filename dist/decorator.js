import _classCallCheck from "babel-runtime/helpers/classCallCheck";

var _dec, _class, _dec2, _class2;

function testable(isTestable) {
  return function (target) {
    target.isTestable = isTestable;
  };
}
var MyTestableClass = (_dec = testable(true), _dec(_class = function MyTestableClass() {
  _classCallCheck(this, MyTestableClass);
}) || _class);

console.info(MyTestableClass.isTestable); // true

var MyClass = (_dec2 = testable(false), _dec2(_class2 = function MyClass() {
  _classCallCheck(this, MyClass);
}) || _class2);

console.info(MyClass.isTestable); // false
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNvcmF0b3IuanMiXSwibmFtZXMiOlsidGVzdGFibGUiLCJpc1Rlc3RhYmxlIiwidGFyZ2V0IiwiTXlUZXN0YWJsZUNsYXNzIiwiY29uc29sZSIsImluZm8iLCJNeUNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsUUFBVCxDQUFtQkMsVUFBbkIsRUFBK0I7QUFDN0IsU0FBTyxVQUFVQyxNQUFWLEVBQWtCO0FBQ3ZCQSxXQUFPRCxVQUFQLEdBQW9CQSxVQUFwQjtBQUNELEdBRkQ7QUFHRDtJQUVLRSxlLFdBRExILFNBQVMsSUFBVCxDOzs7O0FBR0RJLFFBQVFDLElBQVIsQ0FBYUYsZ0JBQWdCRixVQUE3QixFLENBQXlDOztJQUduQ0ssTyxZQURMTixTQUFTLEtBQVQsQzs7OztBQUdESSxRQUFRQyxJQUFSLENBQWFDLFFBQVFMLFVBQXJCLEUsQ0FBaUMiLCJmaWxlIjoiZGVjb3JhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdGVzdGFibGUgKGlzVGVzdGFibGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB0YXJnZXQuaXNUZXN0YWJsZSA9IGlzVGVzdGFibGVcbiAgfVxufVxuQHRlc3RhYmxlKHRydWUpXG5jbGFzcyBNeVRlc3RhYmxlQ2xhc3Mge1xufVxuY29uc29sZS5pbmZvKE15VGVzdGFibGVDbGFzcy5pc1Rlc3RhYmxlKSAvLyB0cnVlXG5cbkB0ZXN0YWJsZShmYWxzZSlcbmNsYXNzIE15Q2xhc3Mge1xufVxuY29uc29sZS5pbmZvKE15Q2xhc3MuaXNUZXN0YWJsZSkgLy8gZmFsc2VcbiJdfQ==