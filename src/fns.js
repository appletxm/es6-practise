function doFn({x = 0, y = 0} = {}){
  console.info('fns==', x, y)
  return [x, y]
}

function restFn(a, b, ...arg){
  console.info('fns==', a, b, arg)
}

function throwIfMissing() {
  throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
  return mustBeProvided;
}

export default {
  doFn,
  restFn,
  foo
}
