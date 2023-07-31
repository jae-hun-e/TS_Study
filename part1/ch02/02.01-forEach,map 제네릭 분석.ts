interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;

  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
}

// forEach
[1, 2, 3].forEach((value) => console.log(value));
["1", "2", "3"].forEach((value) => console.log(value));


// map
const strings = [1, 2, 3].map((value) => value.toString());
const numbers = [1,2,3].map<number>((v) => v*1)
