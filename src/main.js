var a = '1';
console.log('aaa', a);
//DECLARING VARIABLES
// you are able to create variables the same way in js with var, let, const
var hello = 'world';
var hi = 'there';
hi = 'person';
// hi = 500; you are not able to do thing because 'hi' is a string type
var greeting = 'salutations';
greeting = 'bad salutations';
// greeting = false; this will not work.
// DECLARING FUNCTIONS
var getFullName = function (first, last) {
    return first + " " + last;
};
var user = {
    name: 'Tony',
    age: 24,
    getMessage: function () {
        return "Hello my name is " + this.name;
    }
};
var user2 = {
    name: 'Tyler',
    getMessage: function () {
        return "Hello my name is " + this.name;
    }
};
console.log(user2.getMessage());
