export {};

interface Profile {
  name: string;
  age: number;
  married: boolean;
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const hun: Profile = {
  name: "hun",
  age: 3,
  married: false,
};

const hun2: Pick<Profile, "name" | "age"> = {
  name: "hun2",
  age: 3,
};
