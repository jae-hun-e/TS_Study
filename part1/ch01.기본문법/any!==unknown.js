"use strict";
const testObj = {
    talk() {
        return 3;
    },
};
const anyType = testObj.talk();
anyType.talk(); // 타입지정 포기
const unKnownType = testObj.talk();
unKnownType.talk(); // 사용할 때 타입 지정해줘야 함
