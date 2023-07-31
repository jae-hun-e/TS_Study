interface Array<T>{
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}
// T가 number가 되므로 S도 number가 되고
const filterfn1 = [1,2,3,4,5].filter(v => v%2)

// (string| number)[]으로 제대로 타입분석을 하지 못하고 있다. (T가 string| number이기 때문)
const filterfn2 = ["1","2","3",4,5].filter(v => typeof v === 'string')
// 아래 타입의 경우 제네릭이 T밖에없기 때문에 string| number를 바꿀 수 없다.
// 하지만 위에 타입경우 T는 고정되어있지만 S를 바꿀 수 있는 여지가 있기 때문에 위에 타입으로 추론해야한다.

// string extends string|number 이기 때문에 커스텀 타입가드를 이용해서 S를 string으로 고정해주면 원하는 타입을 얻을 수 있다.
const predicate = (value:string|number) : value is string =>typeof  value === 'string'
const filterfn3 = ["1","2","3",4,5].filter(predicate)

// const filterfn4 = ["1","2","3",4,5].filter<string>(v => typeof  v === 'string')


export {}