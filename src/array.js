let arr = [1, 2, 3, 4, 5]
// arr.reduce((accumulator, currentValue, currentIndex, array) => {
//   console.info(accumulator, currentValue, currentIndex, array)
//   return accumulator + currentValue
// })
let newArr = arr.reduce((a, b) => {
  return a * b
})

console.info(newArr, arr)
