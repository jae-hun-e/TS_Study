// TS에서 원시타입을 구분하기 위해 브랜딩 기법 사용

type Brand<K, T> = K & { __brand: T };

type EUR = Brand<number, "EUR">;
type USD = Brand<number, "USD">;
type KRW = Brand<number, "KRW">;

let eur = 10 as EUR;
let usd = 10 as USD;
let krw = 1000 as KRW;

const euroToUsd = (euro: EUR): USD => {
    return (euro * 0.99) as USD;
};

console.log(euroToUsd(usd)); // error
console.log(euroToUsd(krw)); // error
console.log(euroToUsd(eur));
