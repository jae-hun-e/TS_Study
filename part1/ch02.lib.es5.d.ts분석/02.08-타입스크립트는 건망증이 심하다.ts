export {};
interface Axios {
  get(): void;
}
class CustomError extends Error {
  response?: {
    data: any;
  };
}

declare const axios: Axios;

(async () => {
  try {
  } catch (err: unknown) {
    console.error((err as CustomError).response?.data);
    // 타입을 지정해준건 일회성이라 그 다음에 또 까먹는다
    err.response?.data; // error msg : 'err' is of type 'unknown'.

    // 그래서 변수를 만들어서 타입을 저장해준다. (as를 최대한 적게 쓰기 위함)
    const customError = err as CustomError;
    console.log(customError.response?.data);

    // as 안쓰기(best)
    if (err instanceof CustomError) {
      const customError2 = err;
      console.log(customError2.response?.data);
    }
  }
})();

const a = <T = unknown>(v: T): T => {
  return v;
};
const c = a(3);
