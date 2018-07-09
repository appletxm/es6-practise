var arr = [1, 2, 3, 4, 5];
// arr.reduce((accumulator, currentValue, currentIndex, array) => {
//   console.info(accumulator, currentValue, currentIndex, array)
//   return accumulator + currentValue
// })
var newArr = arr.reduce(function (a, b) {
  return a * b;
});

console.info(newArr, arr);