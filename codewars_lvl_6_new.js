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