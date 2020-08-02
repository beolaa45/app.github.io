var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.describe = function () {
        console.log("Department ");
    };
    return Department;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A(n) {
        return _super.call(this, n) || this;
    }
    return A;
}(Department));
var obj = new A("khanh");
console.log(A.describe());
