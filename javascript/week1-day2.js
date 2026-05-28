//Callback


let fs = require("fs");

function read(err, contents){
    console.log(contents);
}

fs.readFile("a.txt", "utf-8", read);

console.log("suppp");



//setTimeout


function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");
