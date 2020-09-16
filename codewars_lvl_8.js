/* 
Quiz #1
Function syntax debugging
*/

function main (verb, noun) {
    return verb + noun
  }


/* 
Quiz #2
Returning Strings
Make a function that will return a greeting statement that uses an input; 
your program should return, "Hello, <name> how are you doing today?".
(Make sure you type the exact thing I wrote or the program may not execute properly)
*/

function greet(name) {
    return "Hello, " + name + " how are you doing today?";
  }

  //or another approach with method replace

  function greet(name){
    return "Hello, <name> how are you doing today?".replace("<name>", name);
  }

/*
Quiz #3
The cockroach is one of the fastest insects. 
Write a function which takes its speed in km per hour and returns it in cm per second, 
rounded down to the integer (= floored).
*/
function cockroachSpeed(s) {
    var roachSpeed = s*Math.pow(10, 5)/3600
    return Math.floor(roachSpeed)
  }

  

/*
Quiz #4
Define a method hello that returns "Hello, Name!" to a given name, 
or says Hello, World! if name is not given (or passed as an empty String).
Assuming that name is a String and it checks for user typos to return 
a name with a first capital letter (Xxxx).
*/

function hello(name) {
  if (name === undefined || name ==="") {
    return "Hello, World!"
  }
  else {
    let nameNew = name.toLowerCase();
    return "Hello, " + nameNew.charAt(0).toUpperCase() + nameNew.slice(1) +"!";
    }  
}

//another solution

function hello(name) {
  return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}

/*
Quiz #5
Your coworker was supposed to write a simple helper function 
to capitalize a string (that contains a single word) before they went on vacation.
Unfortunately, they have now left and the code they gave you doesn't work. 
Fix the helper function they wrote so that i
t works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
*/
function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}


/*
Quiz #6
Write function parseF which takes an input 
and returns a number or null if conversion is not possible. 
The input can be one of many different types so be aware.
*/
function parseF(s) {
  if (s === true || s === null || typeof s === 'object' || s === "null" || isNaN(s) || s === false ) {
    return null;
  }
  else {
    return Number(s)
  }
}

//or

function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

/*
Quiz #6
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.
*/


function getAverage(marks) {
  return Math.floor((marks.reduce(function(a, b){
    return a + b;
}, 0))/marks.length);
}

//or


function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

/* Puzzle #7
Write a function will check number and return Odd or Even 
*/

const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';

//or

const even_or_odd = function(number) {
  return number %2 == 0 ? "Even" : "Odd";
}

/*Puzzle #8
Very simple, given a number, find its opposite.
*/

function opposite(number) {
  return number - (number*2);
 }
//or
 const opposite = number => -number;

 //or

 function opposite(number){
   return - number;
 }

 /* Puzzle #9
You get an array of numbers, return the sum of all of the positives ones.
 */
function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i< arr.length; i++) {
    if(arr[i] > 0){sum+= arr[i]};
  }
    return sum;
}

//or

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

//or

const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

//or

function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}
