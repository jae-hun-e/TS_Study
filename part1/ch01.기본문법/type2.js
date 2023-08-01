"use strict";
const str1 = "hello";
const str2 = "hell";
function c(a1, b1) {
    return a1 + b1;
}
c(str1, str2);
const clg = "hello hell";
function rest(a, ...args) {
    console.log(a, args); // 1, "2", "3"
}
rest(1, "2", "3");
const tuple = ["1", 1];
// tuple[2] = "hello"; //error
tuple.push("hello");
