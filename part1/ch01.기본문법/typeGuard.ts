// 원시값
function numOrStr(a: number | string) {
  if (typeof a === "string") {
    a.split(",");
  } else {
    a.toFixed(1);
  }
}

// Array
function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {
    a.slice(1);
  } else {
    a.toFixed(1);
  }
}

// Object
type B = { type: "b"; bbb: string };
type C = { type: "c"; ccc: string };
type D = { type: "c"; ddd: string };
type A = B | C | D;

function typeCheck(a: A) {
  if (a.type === "b") {
    a.bbb;
  } else if ("ccc" in a) {
    a.ccc;
  } else {
    a.ddd;
  }
}

interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}
function catOrDog(a: Cat | Dog): a is Dog {
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}
const cat: Cat | Dog = { meow: 3 };
if (catOrDog(cat)) {
  console.log(cat.meow);
}
if ("meow" in cat) {
  console.log(cat.meow);
}

// Promise 성공했을 때
const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

// Promise 실패했을 때
const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => input.status === "rejected";

// Promise가 실행되면 Settled 상태가 되는데 Settled 상태안에서 성공했을 경우인 fulfilled 상태와 실패했을 경우인 rejected 상태로 나눠진다.
const promises = await Promise.allSettled([
  Promise.resolve("a"),
  Promise.resolve("b"),
]);
// 커스텀 타입가드 함수를 이용해서 성공했을 때 타입을 PromiseFulfilledResult로 지정해준다.
const success = promises.filter(isFulfilled);

// 커스텀 타입가드 함수를 이용해서 실패했을 때 타입을 PromiseRejectedResult로 지정해준다.
const errors = promises.filter(isRejected);

export {};
