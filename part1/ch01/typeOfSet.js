"use strict";
// 좁은 타입을 넓은 타입에는 대입 가능
const test_1 = { name: "jaehun", age: 27 };
const test_2 = test_1;
// 넓은 타입을 좁은 타입에는 대입 불가능
const test_3 = { name: "jaehun", age: 27 };
const test_4 = test_3;
//error
const test_5 = { name: "jaehun", age: 27, married: false };
//success
const obj_test6 = { name: "jaehun", age: 27, married: false };
const test_6 = obj_test6;
//error
const obj_test7 = { alias: "hun", age: 27, married: false };
const test_7 = obj_test7;
