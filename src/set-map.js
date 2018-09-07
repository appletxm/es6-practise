const s = new Set([1,2,9,3,4,5,6,9])

const myMap = new Map()
  .set('yes', true)
  .set('no', false)

  function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let item of strMap) {
      console.info('@@@', item)
      let [k, v] = item
      obj[k] = v;
    }
    return obj;
  }

console.info('===set-map:', s)
console.info('=====map:', myMap)
const mapObj = strMapToObj(myMap)

export default {}
