interface Interface {
  readonly a: string;
  b: number;
}

class TSClass implements Interface {
  private readonly _a: string = "init";
  get a() {
    return this._a;
  }

  protected _b: number = 1;
  get b() {
    return this._b;
  }
  set b(v: number) {
    this._b = v;
  }

  c: string = "기본값이 public";

  method() {
    console.log(this._a);
    console.log(this._b);
    console.log(this.c);
  }
}

class inheritClass extends TSClass {
  method() {
    console.log(this._a); // error
    console.log(this.a); // 가능..
    console.log(this._b);
    console.log(this.b);
    console.log(this.c);
  }
}

new inheritClass()._a; // error
new inheritClass().a; // 가능...
new inheritClass()._b; // error
new inheritClass().b; // 가능..
new inheritClass().c;

// 추상 클래스
abstract class AbstractClass {
  private readonly a: string = "init";
  protected b: number = 1;
  c: string = "기본값이 public";

  abstract method(a: string): void;

  method2() {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
}

class realClass extends AbstractClass {
  method(a: string) {
    console.log(this.a); //error
    console.log(this.b);
    console.log(this.c);
  }
}

class inheritAbstractClass extends realClass {
  method() {
    console.log(this.a); // error
    console.log(this.b);
    console.log(this.c);
  }
}

new inheritAbstractClass().a; // error
new inheritAbstractClass().b; // error
new inheritAbstractClass().c;
