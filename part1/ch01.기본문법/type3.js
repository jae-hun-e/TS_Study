"use strict";
function walk(dir) { }
walk(2 /* EDirection.Left */);
// keyof, typeof 사용해서 obj를 enum으로 쓰기
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
console.log(ODirection.Up);
function run(dir) { }
run(ODirection.Right);
