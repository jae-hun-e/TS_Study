const b = [1, 2, "4", "5", 3];
const myReduce3 = b.reduce((a, b) => {
  return typeof b === "number" ? (a += b) : a;
}); // 15

console.log(myReduce3);
