const str1: string = "hello";
const str2: String = "hell";

function c(a1: string, b1: string) {
  return a1 + b1;
}
c(str1, str2 as string);

type World = "world" | "hell";

type Greeting = `hello ${World}`;
const clg: Greeting = "hello hell";

function rest(a: number, ...args: string[]) {
  console.log(a, args); // 1, "2", "3"
}
rest(1, "2", "3");

const tuple: [string, number] = ["1", 1];
// tuple[2] = "hello"; //error
tuple.push("hello");
