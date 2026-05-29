//setTimeout Promisified 
function resolve(resolved){ 
    setTimeout(resolved, 3000);
}


function setTimeoutPromisified(){
    return new Promise(resolve);
}

function callback(){
    console.log("hehe");
}

let p = setTimeoutPromisified();
p.then(callback);


//setTimeout - input version

function setTimeoutPromisified(ms){

    function resolve(resolved){ 
    setTimeout(resolved, ms);
    }


    return new Promise(resolve);
}

function callback(){
    console.log("hehe");
}

let p = setTimeoutPromisified(3000);
p.then(callback);



//better setTimeout with anonymous function

function setTimeoutPromisified(ms){

    return new Promise(function(){
        setTimeout(resolve, ms);
    });
}

function callback(){
    console.log("hehe");
}

let p = setTimeoutPromisified(3000);
p.then(callback);





//readFile Promisified
let fs = require("fs");

function solve(fileRead){
    fs.readFile("a.txt", "utf-8", function(err, contents){
        fileRead(contents);
    });
}

function callback(contents){
    console.log(contents);
}

function resolve(){
    return new Promise(solve);
}

let p = resolve();

p.then(callback);








//Promise-Class itself
class Promise2 {
    constructor(fn) {
        this.fn = fn;
        function afterDone(){
            this.resolve();
        }
        fn(afterDone);

    }

    then(callback){
        this.resolve = callback;
    }
}



//Promises
function setTimeoutPromisified(ms){

    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback(){
    console.log("hehe");
}

setTimeoutPromisified(3000).then(callback);


//Async - Await

function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
	await setTimeoutPromisified(1000);
	console.log("hi");
	await setTimeoutPromisified(3000);
	console.log("hello");
	await setTimeoutPromisified(5000);
	console.log("hi there");
}

solve();
