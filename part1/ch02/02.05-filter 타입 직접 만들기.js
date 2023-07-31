const a = [1, 2, 3];
const myFilter = a.filter((v) => v < 2); // [1]
// number | string이 T인데 number | string이 아닌 새로운 타입이 필요하므로 새로운 제네릭 S를 추가해준다(filter를 쓸 때 결정되므로 필터에 붙여준다 )
const b = [1, 2, "3"];
const myFilter2 = b.filter((v) => typeof v === "string"); // ['3']
export {};
