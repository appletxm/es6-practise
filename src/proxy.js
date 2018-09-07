
var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`, target, key, receiver);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`, target, key, value, receiver);
    return Reflect.set(target, key, value, receiver);
  }
});

obj.a = 78
console.info('====proxy:', obj.a)

var obj2 = {a: 123, b: 456}
var proxy2 = new Proxy(obj2, {
  get: function (target, key, receiver) {
    console.info('======get proxy2:', key, target, receiver, this)
    return target[key]
  },
  set: function (target, key, value, receiver) {
    console.info('======set proxy2:', key, target)
    target[key] = value
    return true
  }
})

proxy2.a = 500
console.info('======proxy2:', proxy2.a)


var handler = {
  get: function(target, name) {
    console.info('======proxy3 get:', target, this)
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function(target, thisBinding, args) {
    console.info('======proxy3 apply:', target, this, thisBinding)
    return args[0];
  },

  construct: function(target, args) {
    console.info('======proxy3 construct:', target, this)
    return {value: args[1]};
  }
}

var fproxy = new Proxy(function(x, y) {
  return x + y;
}, handler);

fproxy(1, 2) // 1
new fproxy(1, 2) // {value: 2}
fproxy.prototype === Object.prototype // true
fproxy.foo === "Hello, foo" // true


let proto = new Proxy({a:2, b:3}, {
  get(target, propertyKey, receiver) {
    console.log('GET ' + propertyKey);
    return target[propertyKey];
  }
});

let obj3 = Object.create(proto);
console.info('======proxy4:', obj3.a)

var fnList = {
  double: n => n * 2,
  pow: n => n * n,
  reverseInt: n => n.toString().split("").reverse().join("") | 0
};
var pipe = (function () {
  return function (value) {
    var funcStack = [];
    var oproxy = new Proxy({} , {
      get : function (pipeObject, fnName) {
        if (fnName === 'get') {
          return funcStack.reduce(function (val, fn) {
            return fnList[fn](val);
          }, value);
        } else {
          funcStack.push(fnName);
        }

        return oproxy;
      }
    });

    return oproxy;
  }
}());

console.info('======proxy5:', pipe(3).double.pow.reverseInt.get)

const dom = new Proxy({}, {
  get(target, property) {
    return function(attrs = {}, ...children) {
      const el = document.createElement(property);
      for (let prop of Object.keys(attrs)) {
        el.setAttribute(prop, attrs[prop]);
      }
      for (let child of children) {
        if (typeof child === 'string') {
          child = document.createTextNode(child);
        }
        el.appendChild(child);
      }
      return el;
    }
  }
});

const el = dom.div({},
  'Hello, my name is ',
  dom.a({href: '//example.com'}, 'Mark'),
  '. I like:',
  dom.ul({},
    dom.li({}, 'The web'),
    dom.li({}, 'Food'),
    dom.li({}, '…actually that\'s it')
  )
);

document.body.appendChild(el)

var testObj = {
  a: '123',
  b: '556',
  foo(){
    console.info('1111')
  }
}
var target = function () { return 'I am the target'; };
var handler = {
  apply: function (target, ctx, args) {
    console.info('======proxy6:', target, ctx, args)
    return 'I am the proxy' + ctx.a + ctx.b;
  }
};

var p = new Proxy(target, handler);
console.info('======proxy6:', p.call(testObj, 1,2,3,5))


var p = new Proxy(function () {}, {
  construct: function(target, args) {
    console.log('called: ' + args.join(', '), target, args);
    return { value: args[0] * 10 };
  }
});
console.info('======proxy7:', new p(1))


const target8 = {
  m: function () {
    return this === proxy8
  }
};
const handler8 = {};
const proxy8 = new Proxy(target8, handler8);
console.info('======proxy8:', target8.m()) // false
console.info('======proxy8:', proxy8.m())  // true

export default {}
