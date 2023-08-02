export {};
interface Profile {
  readonly name?: string;
  readonly age?: number;
  readonly married?: boolean;
}

type Name = Profile["name"];

type R<T> = {
  -readonly [R in keyof T]-?: T[R];
};

const hun: Profile = {
  name: "hun",
  age: 3,
  married: false,
};

const hun2: R<Profile> = {
  name: "hun2",
  age: 3,
  married: false,
};
hun2.name = "change";

type Rc<K extends keyof any, T> = {
  [P in K]: T;
};

const a: Rc<string, number> = { a: 2, b: 3, c: 5 };

type A = string | null | undefined | number;

type NN1<T> = T extends null | undefined ? never : T;
type B = NN1<A>;

type NN2<T> = T & {};
type C = NN2<A>;
