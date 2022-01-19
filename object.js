var student1 = {name:"Jack Smithhhh", id:719245, phone: 52};
var student2 = {name:"Marry Smith & her husband", id:619543, phone: 5556872};

// console.log(student1, student2);

var student1name = "name";
var name1 =  student1.name;
var name2 = student1["name"];
var name3 = student1[student1name];

console.log(name1);
console.log(name2);
console.log(name3);

//Update Phone Number 
student2.phone = 6565656;
student2["name"] = "shechingping";
student1[student1name] = "Tomas";


console.log(student2);

//Add new Property
student1.city =" New York "

console.log(student1);
