// Assignment-1
/*Create a variable for each of the following: your favorite color, your height in centimeters, 
and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log*/


const favColor = "matteBlack";
let height = "idk";
var pizza = "lilBit";
console.log(favColor);
console.log(height);
console.log(pizza);



//Assignment-2
// Write a function sum that finds the sum of two numbers. 


function sum(num1, num2){
    let ans = num1 + num2;
    console.log(ans);
}
sum(6,7);



//Assignment-3
//Write a function called canVote that returns true or false if the age of a user is > 18


function canVote(age){
    if(age>=18){
        return "true";
    }
    else return "false";
}
console.log(canVote(67));



//Assignment-4
//Write an if/else statement that checks if a number is even or odd. 
// If it's even, print "The number is even." Otherwise, print "The number is odd."


function odd(num){
    if(num%2==0){
        console.log("even");
    } else console.log("odd");
}
odd(67);



//Assignment-5
// Write a function called sum that finds the sum from 1 to a number


function sum(num){
    let result = 0;
    for(i=1; i<=num; i++){
        result = result + i;
    }
    console.log(result);
}
sum(67);



//Assignment-6
// Write a function that takes a user as an input and greets them with their name and age


function greet(user){
    console.log("Hello "+ user.name);
}

let user1 = {
    name: "Daksh",
    age: 19,
    password: "kuronami",
}

greet(user1);



//Assignment-7
//Also tell the user if they are legal to vote or not


function greet(user){
    console.log("Hello "+ user.name);
    if(user.age>=18){
        console.log("legal to vote")
    } else console.log("not legal to vote");
}

let user1 = {
    name: "Daksh",
    age: 19,
    password: "kuronami",
}

greet(user1);



//Assignment-8
//Create a function that takes an array of objects as input,
//and returns the users whose age > 18 and are male


function legalMale(user) {
    for(i=0; i<user.length; i++){
        if(user[i].age>18 && user[i].sex=="Male"){
            console.log(user[i].name)
        }
    }
}

let users = [{
    name: "Daksh",
    age:19,
    sex: "Male",
}, {
    name: "Meer",
    age:15,
    sex: "Male",
}]

legalMale(users);


