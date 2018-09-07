let [a, b, c] = [1, 2, 3]
console.info(a,b,c)

const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

let { loc, loc: { start }, loc: { start: { line }} } = node;
console.info(line, loc, start)

export default {
  a, b, c
}
