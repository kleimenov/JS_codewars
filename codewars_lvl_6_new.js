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