export {};

interface Profile {
  name: string;
  age: number;
  married: boolean;
}

type P<T> = {
  [P in keyof T]?: T[P];
};

const hun: Profile = {
  name: "hun",
  age: 3,
  married: false,
};

const hun2: P<Profile> = {
  name: "hun2",
  age: 3,
};
