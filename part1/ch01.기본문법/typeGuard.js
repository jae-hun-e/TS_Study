// 원시값
function numOrStr(a) {
    if (typeof a === "string") {
        a.split(",");
    }
    else {
        a.toFixed(1);
    }
}
// Array
function numOrNumArr(a) {
    if (Array.isArray(a)) {
        a.slice(1);
    }
    else {
        a.toFixed(1);
    }
}
function typeCheck(a) {
    if (a.type === "b") {
        a.bbb;
    }
    else if ("ccc" in a) {
        a.ccc;
    }
    else {
        a.ddd;
    }
}
function catOrDog(a) {
    if (a.meow) {
        return false;
    }
    return true;
}
const cat = { meow: 3 };
if (catOrDog(cat)) {
    console.log(cat.meow);
}
if ("meow" in cat) {
    console.log(cat.meow);
}
// Promise 성공했을 때
const isFulfilled = (input) => input.status === "fulfilled";
// Promise 실패했을 때
const isRejected = (input) => input.status === "rejected";
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
