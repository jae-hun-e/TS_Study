export {};

interface Arr<T> {
  filter<S extends T>(callbackFn: (v: T) => v is S): S[];
}

const a: Arr<number> = [1, 2, 3];
const myFilter = a.filter((v): v is number => v < 2); // [1]

// number | string이 T인데 number | string이 아닌 새로운 타입이 필요하므로 새로운 제네릭 S를 추가해준다(filter를 쓸 때 결정되므로 필터에 붙여준다 )
const b: Arr<number | string> = [1, 2, "3"];
const myFilter2 = b.filter((v): v is string => typeof v === "string"); // ['3']
