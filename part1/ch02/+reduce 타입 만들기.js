const a = [1, 2, 4, 5, 3];
const myReduce1 = a.reduce((a, b) => (a += b)); // 15
const myReduce2 = a.reduce((a, b) => (a += b), 10); // 25
const b = [1, 2, "4", "5", 3];
const myReduce3 = b.reduce((a, b) => {
  return typeof b === "number" ? (a += b) : a;
}); // 6
const myReduce4 = b.reduce((a, b) => {
  return typeof b === "number" ? (a += b) : a;
}, 10); // 16
const c = [1, 2, "4", "5", 3];
const solReduce1 = c.reduce((a, b, idx, arr) => {
  return typeof b === "number" ? (a += b) : a;
}, 10); // 25
const solReduce2 = c.reduce((a, b, idx, arr) => {
  return typeof b === "number" ? (a += b) : a;
}); // 25
export {};
