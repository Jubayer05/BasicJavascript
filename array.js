var friendsAge = [55,67,124,105,97];

var jonasAge = friendsAge[2];

friendsAge[2] = 560;

var position = friendsAge.indexOf(30);

var position2 = friendsAge.indexOf(54);

// console.log(position2); //Output = -1;
// console.log(position);
// console.log(friendsAge);

/** Push, Pop, lenght, unshift of array */
friendsAge.push(36);
console.log(friendsAge); //Output = [ 24, 21, 26, 30, 27, 36 ]

friendsAge.push(4000);
console.log(friendsAge); //Output = [ 24, 21, 26, 30, 27, 36, 40]

friendsAge.pop();
console.log(friendsAge); //Output = [ 24, 21, 26, 30, 27, 36 ]

friendsAge.unshift(100, 90);
console.log(friendsAge); //Output = [ 100, 90, 24, 366, 21, 26, 30, 27, 36 ]

friendsAge.shift();
console.log(friendsAge); //Output = [ 90, 24, 21, 26, 30, 27, 36 ]

console.log(friendsAge.length);
console.log("It's an array");

