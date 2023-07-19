// TS가 모든 가능성을 모두 고려하기 때문에 |를 쓰면 타입 추론이 안된다.
function add(x: string | number, y: string | number): string | number {
  return x + y;
}
add(1, 2);
add("1", "2");
add(1, "2");

// &는 객체의 요소를 모두 포함해야한다는 뜻이다.
type A = {
  a: string;
};
type B = {
  b: string;
};

// &는 A, B 타입 모두 포함해야함(and)
const aa: A & B = { a: "hello", b: "world" };

// |는 A, B 타입 중 하나만 포함하면 됨(or)
const bb1: A | B = { a: "hello" };
const bb2: A | B = { b: "world" };
const bb3: A | B = { a: "hello", b: "world" };
