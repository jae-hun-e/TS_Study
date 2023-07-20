// {}, Object 타입은 null, undefined를 제외한 모든 타입을 의미한다.
const x: {} = "hello";
const y: Object = "hi";
const xx: object = "hi";

const z: unknown = "hi";

if (z) {
  z;
}
