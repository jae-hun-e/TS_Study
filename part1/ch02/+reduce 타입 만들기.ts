export {};

interface Arr<T> {
  reduce(callBackFn: (a: T, b: T) => T, init?: T): T;
  reduce<S>(callBackFn: (a: S, b: T) => S, init?: S): S;

  //   정답
  // reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;
  // reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;
  // reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;
}

const a: Arr<number> = [1, 2, 4, 5, 3];

const myReduce1 = a.reduce((a, b) => (a += b)); // 15
const myReduce2 = a.reduce((a, b) => (a += b), 10); // 25

const b: Arr<number | string> = [1, 2, "4", "5", 3];
const myReduce3 = b.reduce<number>((a, b) => {
  return typeof b === "number" ? (a += b) : a;
}); // 6
const myReduce4 = b.reduce<number>((a, b) => {
  return typeof b === "number" ? (a += b) : a;
}, 10); // 16

const c = [1, 2, "4", "5", 3];

const solReduce1 = c.reduce<number>((a, b, idx, arr) => {
  return typeof b === "number" ? (a += b) : a;
}, 10); // 25

const solReduce2 = c.reduce<number>((a, b, idx, arr) => {
  return typeof b === "number" ? (a += b) : a;
}); // 25
