"use strict";
class TSClass {
    constructor() {
        this._a = "init";
        this._b = 1;
        this.c = "기본값이 public";
    }
    get a() {
        return this._a;
    }
    get b() {
        return this._b;
    }
    set b(v) {
        this._b = v;
    }
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
class AbstractClass {
    constructor() {
        this.a = "init";
        this.b = 1;
        this.c = "기본값이 public";
    }
    method2() {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
}
class realClass extends AbstractClass {
    method(a) {
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
