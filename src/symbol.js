let s1 = Symbol('foo')
let s2 = Symbol('bar')

s1 // Symbol(foo)
s2 // Symbol(bar)

console.info(s1.toString()) // "Symbol(foo)"
console.info(s2.toString()) // "Symbol(bar)"
