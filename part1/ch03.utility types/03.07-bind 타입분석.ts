export {};

function a(this: Window | typeof obj, param?: string) {
  console.log(this.name);
}

const obj = { name: "hun" };
const b = a.bind(obj);
b();

// type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any
//   ? U
//   : unknown;

// type OmitThisParameter<T> = unknown extends ThisParameterType<T>
//   ? T
//   : T extends (...args: infer A) => infer R
//   ? (...args: A) => R
//   : T;

type T = ThisParameterType<typeof a>;
type NoThis = OmitThisParameter<typeof a>;

/** bind
 * bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
 * bind<T, A extends any[], B extends any[], R>(this: (this: T, ...args: [...A, ...B]) => R, thisArg: T, ...args: A): (...args: B) => R;
 * */

function add(a: number, b: number, c: number, d: number): number {
  return a + b + c + d;
}

const add1 = add.bind(null);
add1(1, 2, 3, 4);

const add2 = add.bind(null, 1);
add2(2, 3, 4);

const add3 = add.bind(null, 1, 2);
add3(3, 4);

const add4 = add.bind(null, 1, 2, 3);
add4(4);

const add5 = add.bind(null, 1, 2, 3, 4);
add5();

// interface CallableFunction extends Function {
//   bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
//   bind<T, A extends any[], B extends any[], R>(
//     this: (this: T, ...args: [...A, ...B]) => R,
//     thisArg: T,
//     ...args: A
//   ): (...args: B) => R;
// }
