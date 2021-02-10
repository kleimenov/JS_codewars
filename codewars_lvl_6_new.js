let array = [1,2,3,4]

const insert = (array, index, newItem) => [
  // part of the array before the specified index
  ...array.slice(0, index),
  // inserted items
  newItem,
  // part of the array after the specified index
  ...array.slice(index)
]

const result = insert(array, 5, 100)

console.log(result)
// [1, 10, 20, 2, 3, 4, 5]