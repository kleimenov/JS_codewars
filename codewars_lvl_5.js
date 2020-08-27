/*
Quize #1
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
    var zeroArray = [];
    var k=0;
    for (var i=0; i < arr.length; ++i) {
      if (arr[i] === 0) {
        k++;
      } else {
        zeroArray.push(arr[i])
      }
    }
    for (let j=0; j<k; j++) {
      zeroArray.push(0);
    }
    return zeroArray;
  }

  //or

  var moveZeros = function (arr) {
    return arr
      .filter((val) => val !== 0)
      .concat(arr.filter((val) => val === 0));
  }

  //or

  var moveZeros = function (arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
  }