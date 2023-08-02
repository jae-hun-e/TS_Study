export {};
function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

// T extends (...args: any)=> any  이건 T는 함수여야 한다라는 뜻
type P<T extends (...args: any) => any> = T extends (...args: infer A) => any
  ? A
  : never;

// 매개변수의 타입을 가져오고 싶을 때 (변수는 타입으로 바로 사용할 수 없으므로 typeof를 붙여줘야한다.)
type Params = Parameters<typeof zip>; // [number, string, boolean]
type Params_1 = Params[0]; // number

// 리턴 타입을 가져오고 싶을 때
type Returns = ReturnType<typeof zip>; // {x: number, y: string, z: boolean}

class A {
  a: string;
  b: number;
  c: boolean;
  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

const c = new A("123", 123, true);

// 생성자의 타입 가져오고 싶을 때
type C = ConstructorParameters<typeof A>;

// 인스턴스의 타입 가져오고 싶을 때
type I = InstanceType<typeof A>;
