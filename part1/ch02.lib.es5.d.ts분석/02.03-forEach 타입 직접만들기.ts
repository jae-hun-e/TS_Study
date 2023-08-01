interface Arr<T>{
    forEach(callbackfn : (item : T) => void): void
//     정답
//     forEach(callbackfn: (value: number, index: number, array: Int8Array) => void, thisArg?: any): void;
}

const myForEach1 : Arr<number> = [1,2,3]

myForEach1.forEach((item) => console.log(item))

const myForEach2 : Arr<string> = ["1","2","3"]
myForEach2.forEach((item) => console.log(item))

const myForEach3 : Arr<string | number> = ["1","2",3]
myForEach2.forEach((item) => console.log(item))

