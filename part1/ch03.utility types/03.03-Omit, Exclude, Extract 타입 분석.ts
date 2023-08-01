export {};

type Exclude<T, U> = T extends U ? never : T; // T가 U의 부분집합이면 never, 아니면 T
type Extract<T, U> = T extends U ? T : never; // T가 U의 부분집합이면 T, 아니면 never

interface Profile {
  name: string;
  age: number;
  married: boolean;
}
type Test = Exclude<keyof Profile, "name">; // 두번째 인자 제거
type Test2 = Extract<keyof Profile, "name">; // 두번째 인자만 남김

type E<T, U> = T extends U ? never : T;

type P<T, K extends keyof T> = {
  [P in K]: T[P];
};

type O<T, K extends keyof T> = P<T, E<keyof T, K>>;

const hun: Profile = {
  name: "hun",
  age: 3,
  married: false,
};

const hun2: O<Profile, "married"> = {
  name: "hun2",
  age: 3,
};
