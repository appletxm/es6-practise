function makeIterator (array) {
  var nextIndex = 0
  return {
    next: function () {
      return nextIndex < array.length ? {value: array[nextIndex++], done: false} : {value: undefined, done: true}
    }
  }
}
var it = makeIterator(['a', 'b'])

// console.info(it.next())
// console.info(it.next())
// console.info(it.next())

class MyIterator {
  constructor(start, stop){
    this.start = start
    this.stop = stop
  }

  [Symbol.iterator](){
    console.info('========iterator', this)
    return this
  }

  next(){
    let start = this.start

    console.info('========next', start, this.stop)

    if(start < this.stop){
      this.start++
      return {value: this.start, done: false}
    }

    return {value: undefined, done: true}
  }
}

function range(start, stop) {
  return new MyIterator(start, stop);
}

for (var value of range(0, 3)) {
  console.log(value); // 0, 1, 2
}




function Obj(value) {
  this.value = value;
  this.next = null;
}

Obj.prototype[Symbol.iterator] = function() {
  var iterator = { next: next };

  var current = this;

  function next() {
    if (current) {
      var value = current.value;
      current = current.next;
      return { done: false, value: value };
    } else {
      return { done: true };
    }
  }
  return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for (var i of one){
  console.log('@@@@@@@@@@@@', i); // 1, 2, 3
}

export default {}
