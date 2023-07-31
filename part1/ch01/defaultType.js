"use strict";
// 변수에 타입지정
let a = 5;
/** 매개변수와 리턴값에 타입지정
 * 1. 일반함수일때는 :뒤에 return 타입 지정
 * 2. 화살표함수일때는 => 뒤에 return 타입 지정
 */
function add(a, b) {
    return a + b;
}
const add2 = (a, b) => a + b;
const add3 = (a, b) => a + b;
const add4 = (a, b) => a + b;
/** 베열과 객체 타입 지정
 * 1. 배열의 타입은 대괄화, 꺽세(제네릭) 두가지 방법으로 표현 가능
 * 2. 객체의 타입은 이름 바로 뒤에 지정
 */
const arr1 = ["123", "456"];
const arr2 = [123, 456];
const arr3 = [123, 456];
const arr4 = [1, 2, "3"]; // 튜플(길이가 정해져있는 array)
const obj = { name: "jaehun", age: 27 };
const test1 = "test1";
let test2 = "test2";
function addFnc(a, b) {
    return a + b;
}
const head = document.querySelector("#head");
if (head) {
    head.innerHTML = "test";
    console.log(head);
}
