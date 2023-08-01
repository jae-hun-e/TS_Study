interface readOnly {
  a: string;
  readonly b: string;
}

const readOnlyTest: readOnly = {
  a: "hi",
  b: "world",
};

readOnlyTest.a = "change";
readOnlyTest.b = "change";

// 여러가지 속성의 타입이 모두 같다면 인덱스 시그니처 사용해서 간편하게 적기
type IndexSignature = {
  [key: string]: number;
};

const indexSignatureTest: IndexSignature = {
  a: 1,
  b: 2,
  c: 3,
};

type Key = "jo" | "jae" | "hun";

type IndexSignature2 = {
  [key in Key]: number;
};

const indexSignatureTest2: IndexSignature2 = {
  jo: 1,
  jae: 2,
  hun: 3,
};
