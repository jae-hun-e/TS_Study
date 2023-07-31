export {};

// T는 map을 사용하기 전에 타입지정, S는 사용하는 순간의 타입 지정
interface Arr<T> {
  map<S>(callBackFn: (v: T) => S): S[];
}

const myMap: Arr<number> = [1, 2, 3];
const myMapResult1 = myMap.map((v) => v * 1);
const myMapResult2 = myMap.map((v) => v + "");
const myMapResult3 = myMap.map((v) => !!v);

const myMap2: Arr<string> = ["1", "2", "3"];
const myMapResult4 = myMap.map((v) => +v);
