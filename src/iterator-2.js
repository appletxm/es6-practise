
var obj = {
	a: 1,
	b: 2,
	c: 3
}

obj[Symbol.iterator] = function(){
	let keys = Object.keys(this)
	let currentIndex = 0
	let obj = this
	
	return {
		[Symbol.iterator]() { return this; },
		next() {
			let item
			
			console.info(keys, currentIndex, obj)
			
			if (currentIndex >= keys.length) {
				return {done: true, value: undefined}
			} else {
				item = obj[keys[currentIndex++]]
				console.info('next fun call', item)
				return {done: false, value: item}
			}
			
		},
		return(v){
			console.info('return fun call', {done: !v, value: v})
			return {done: !v, value: v}
		}
	}
}