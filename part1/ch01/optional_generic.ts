//optonal type
function abc(a: number, b: number, c?: number) {}
abc(1);
abc(1, 2);
abc(1, 3, 4);

/** 내가 만들고 싶은 함수
 * genericExercise(1,2) => 12
 * genericExercise("1","2") => "12"
 */
function genericExercise<T extends number | string>(a: T, b: T): T {
  return a + b;
}

genericExercise(1, 2); // 3
genericExercise<number>(1, 2); // 3
genericExercise("1", "2"); // "12"
genericExercise<string>("1", "2"); // "12"
genericExercise(1, "2"); // error

/** 제네릭의 선언위치는 기본값은 식별자 뒤, 화살표함수는 ()앞이다
 * function a<T>() {}
 * class B<T>() {}
 * interface C<T> {}
 * type D<T> = {};
 * const e = <T>() => {};
 */
