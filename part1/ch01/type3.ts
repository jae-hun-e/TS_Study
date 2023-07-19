// enum 사용
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

function walk(dir: EDirection) {}

walk(EDirection.Left);

// keyof, typeof 사용해서 obj를 enum으로 쓰기
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

type key = keyof typeof ODirection;
type value = (typeof ODirection)[keyof typeof ODirection];

console.log(ODirection.Up);

function run(dir: value) {}

run(ODirection.Right);
