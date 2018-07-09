let b = 0
let promise = new Promise((resolve) => {
  let b = 2
  console.info(b)
  resolve('A')
})

promise.then(data => {
  console.info(2)
  return 'B'
}).then(data => {
  console.info(data)
}).then(data => {
  console.info(b, data)
})

promise.then(() => {
  console.info('3')
})
