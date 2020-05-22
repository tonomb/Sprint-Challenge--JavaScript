// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// nestedFunction can access the variable internal because when nestedFunction is run it looks for the variable internal inside its own execution context. Since it does not find the variable there, it reaches into the execution context of the parent function myFunction and finds the variable there. Functions in javascript can access the variables declared at their parents scope, but parents can´t access variables declared in the child scope. 


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(){
  let counter = 0;
  return function runCount(count){
    for(let i = 1; i <= count; i++){
      counter += i;
    }
    return counter;
  }
}

let newCount = sumation();
console.log(newCount(4));
