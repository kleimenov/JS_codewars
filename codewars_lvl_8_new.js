//Challenge 1:
//Return the average of the given array rounded down to its nearest integer.
//The array will never be empty.

const array = [2,2,2,2];
const array2 = [1,2,3,4,5];
const array3 = [1,1,1,1,1,1,1,2];
const array4 = [2,2,2,2,1,4,6,8];

const sum = array.reduce((a, b)=> {
    return Math.round(a + b/array.length);
}, 0)


function getAverage(marks){
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
  }

function average(array) {
    return Math.floor(array.map((a, b) => a + b)/ array.length)
}

//console.log(average(array3))


