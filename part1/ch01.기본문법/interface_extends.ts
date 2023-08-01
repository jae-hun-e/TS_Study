// type으로 &를 이용해서 상속처럼 사용할 수 있다.
type Animal = { breath: true };
type Poyouryu = Animal & { breed: true };
type Human = Poyouryu & { think: true };

const jaehun: Human = { breath: true, breed: true, think: true };

interface AA {
  breath: true;
}
interface BB extends AA {
  breed: true;
}
interface CC extends BB {
  think: true;
}

const hun: CC = { breath: true, breed: true, think: true };

interface AA {
  plus: () => void;
}

const plusType: AA = {
  breath: true,
  plus: () => {},
};
