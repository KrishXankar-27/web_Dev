// Find sum of two numbers


function sum (a,b){
   return console.log(a+b);
    
}

// sum(6,6)
// sum("50",10)


// Find sum from 1 to a number

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

// const ans = sum();
// console.log(ans);

// const fsa = require("fs");

// const contents = fsa.readFileSync('a.txt' , 'utf-8');
// console.log(contents);


function sum(a, b) {
	return a + b;
  }
  
  function multiply(a, b) {
	return a * b;
  }
  
  function subtract(a, b) {
	return a - b;
  }
  
  function divide(a, b) {
	return a / b;
  }
  
  
  
  // console.log(sum(1, 2))

  const fs = require("fs");

  function print(err, data) {
    if (err) {
      console.log("file not found");
    } else {
      console.log(data);
    }
  }
  
  // fs.readFile('  a.txt', "utf-8", print);

      //  asiigment 1 
  // try to creat a promisified version of 
  // setTimeout , fetch , fs.readfile
  