// 객체는 속성이 적을 수록 넓은타입이고, 속성이많을수록(상세할수록) 좁은타입이다.
type Aa = { name: string }; // 넓은 타입
type Bb = { age: number }; // 넓은 타입
type C = { name: string; age: number }; // 좁은타입

type small = Aa & Bb; // big 보다 좁은 타입
type big = Aa | Bb; // small 보다 넓은 타입

// 좁은 타입을 넓은 타입에는 대입 가능
const test_1: small = { name: "jaehun", age: 27 };
const test_2: big = test_1;

// 넓은 타입을 좁은 타입에는 대입 불가능
const test_3: big = { name: "jaehun", age: 27 };
const test_4: small = test_3;

//error
const test_5: small = { name: "jaehun", age: 27, married: false };

//success
const obj_test6 = { name: "jaehun", age: 27, married: false };
const test_6: small = obj_test6;

//error
const obj_test7 = { alias: "hun", age: 27, married: false };
const test_7: small = obj_test7;
