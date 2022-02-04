function doubleIt(num) {
    var result = num * 2;
    return result;
}

doubleIt(500)

//Add Two Number
var firstNum = doubleIt(256);
var secondNum = doubleIt(275);

console.log(firstNum + secondNum);


//Alternative and the best way
function addNum (num1, num2) {
    var add = num1 + num2;

    return add;
}

var sum = addNum(200 , 800);

console.log(sum);
