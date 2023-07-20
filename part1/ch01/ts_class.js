var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TSClass = /** @class */ (function () {
    function TSClass() {
        this.a = "test";
        this.b = 1;
        this.c = "기본값이 public";
    }
    TSClass.prototype.method = function () {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    };
    return TSClass;
}());
var inheritClass = /** @class */ (function (_super) {
    __extends(inheritClass, _super);
    function inheritClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    inheritClass.prototype.method = function () {
        console.log(this.a); // error
        console.log(this.b);
        console.log(this.c);
    };
    return inheritClass;
}(TSClass));
new inheritClass().a; // error
new inheritClass().b; // error
new inheritClass().c;
