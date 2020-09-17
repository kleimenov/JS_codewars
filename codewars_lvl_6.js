/*
Quize #1

*/

function digital_root(n) {
    while (n > 0) {
      return n % 9 || 9;
    }
    return n;
  }


// or (it isn't my solution)

function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce((sum, x) => sum + +x, 0));
  }

  /* Puzzle #2
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

let A = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

function findOdd(A) {
  let result = {};
  for (let i = 0; i < A.length; i++) {
    let number = A[i];
    result[number] > 0 ? ++result[number] : result[number] = 1;
  }
  for(let key of Object.keys(result)){
    if(result[key]%2 !== 0 ) {
      return Number(key); 
    }
  }
}


console.log(findOdd(A));

//or 

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}