var someElement = document.querySelector('.foo');
console.log('someElement', someElement.value);
var anotherElement = document.querySelector('.another');
anotherElement.addEventListener('blur', function (e) {
    var target = e.target;
    console.log("e " + target.value);
});
