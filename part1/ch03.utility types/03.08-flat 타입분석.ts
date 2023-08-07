export {};
const a = [1, 2, 3, [1, 2], [[1], [2]]];
const b = a.flat();

// flat 타입
type T = {
  a: string;
  b: number;
};
type A1 = T[1 extends number ? "a" : "b"]; // string
type A2 = T["1" extends number ? "a" : "b"]; // number

type FlatArray<Arr, Depth extends number> = {
  done: Arr;
  recur: Arr extends ReadonlyArray<infer InnerArr>
    ? FlatArray<
        InnerArr,
        [-1, 0, 1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth]
      >
    : Arr;
}[Depth extends -1 ? "done" : "recur"];

interface Array<T> {
  flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[];
}

interface ReadonlyArray<T> {
  readonly [n: number]: T;
}
