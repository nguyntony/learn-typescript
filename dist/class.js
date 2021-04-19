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
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.changeUnchangableName = function () {
        // this.unchangableName = "new name";
        // this will not work.
    };
    Person.maxAge = 50; // static means that the class will access this property and that the instances cannot
    return Person;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(Person));
var person1 = new Person('Monster', 'lessons');
