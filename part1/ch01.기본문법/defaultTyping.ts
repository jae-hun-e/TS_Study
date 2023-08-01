// 기본값은 값 뒤에 타입 지정
const a = (b: number = 3, c: { myName: string } = { myName: "hun" }) => {
  return "3";
};

// 화살표 함수의 제네릭은 함수 앞에
// react에서 JSX,TSX쓸때는 제네릭을 쓸때 기본값을 써줘야함
const add = <T extends unknown>(x: T, y: T) => ({ x, y });
