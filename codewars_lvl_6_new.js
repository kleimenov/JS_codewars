/*
let array = [1,2,3,4]

const insert = (array, index, newItem) => [
 
  ...array.slice(0, index),

  newItem,
  
  ...array.slice(index)
]

const result = insert(array, 5, 100)

console.log(result)
// [1, 10, 20, 2, 3, 4, 5]

function(array, index, newItem) {
    

}
*/
/*
let array = [1, 3, 4, 5, 7];

const findOutlier = (array) => {
  let oddNumbers = [];
  let evenNumbers = [];
  
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
      evenNumbers.push(array[index]);
    } else {
      oddNumbers.push(array[index]);
    }
  }
  return evenNumbers.length === 1 ? evenNumbers[0] : oddNumbers[0];

}

console.log(findOutlier(array))
*/
/*
let number = 10;

const result = number.toString(2);
let decimalArray = result.split("");
let sumBinary = 0;
for (let i = 0; i < decimalArray.length; i++) {
  decimalArray[i] = parseInt(decimalArray[i]);
  sumBinary += decimalArray[i];
}
console.log(sumBinary);

var countBits = function (n) {
  let decimalArray=[]
  for (let i = 0; i < n; i++) {
    decimalArray.push(parseInt(decimalArray[i]));
  }
  for (let i = 0; i < decimalArray.length; i++) {
    sumBinary += decimalArray[i];
  }
  return sumBinary;
}

countBits(number)
*/

let likes1 = []; //"no one likes this"
let likes2 = ["Peter"]; //"Peter likes this"
let likes3 = ["Jacob", "Alex"]; //"Jacob and Alex like this"
let likes4 = ["Max", "John", "Mark"]; //"Max, John and Mark like this"
let likes5 = ["Alex", "Jacob", "Mark", "Max"]; //"Alex, Jacob and 2 others like this"
/*
function likes(names) {

  if (!names.length) {
    return "no one likes this";
  } else if (names.length < 4) {
    if ((names.length, (ength = 1))) {
      let text = `${names[0]} likes this`;
      return text;
    }
    if ((names.length, ength === 2)) {
      let text = `${names[0]} and ${names[1]} like this`;
      return text;
    }
    if ((names.length, ength === 3)) {
      let text = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      return text;
    }
  } else {
    let text = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    return text;
  }
}
*/

//
/*
function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}

console.log(likes(likes5))
*/


var uniqueInOrder=function(variable){
  //your code here - remember iterable can be a string or an array
}

let variable1 = 'AAAABBBCCDAABBB';
let variable = [1,2,3,4,2]

//console.log(variable.split('').sort().filter((item, i, arr)=> arr.indexOf(item)==i))
//console.log(array.sort().filter((item, i, arr)=> arr.indexOf(item)==i))

function unique(variable) {

  if(Array.isArray(variable)) {
    return  variable.sort().filter((item, i, arr)=> arr.indexOf(item)==i)
  } 
  return variable.split('').sort().filter((item, i, arr)=> arr.indexOf(item)==i);
}

console.log(unique(variable))