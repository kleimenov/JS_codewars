/*
const array = [1,3,2,4];
const arry2 = [ 31, 9, 25, 60, 89, 73, 80, 85, 73, 81, 16, 71, 47, 75, 81, 61, 91, 16, 86, 27 ]
const x = 89;
const y = 28;


function getMean(arr, x, y) {
    let firstMean = 0;
    let secondMean = 0;
    const lastPartOfArray = arr.length - y;
    const check = x + y;
    while (check && y <= arr.length && x <= arr.length) {
        if(x <= 1 || y <= 1) {
            return -1;
        } else {
            for (let index = 0; index < x; index++) {
                firstMean = firstMean + arr[index];
            }
            for (let index = lastPartOfArray; index < arr.length; index++) {
                secondMean = secondMean + arr[index];
            }
        
            return 0.5 * ((firstMean/x) + (secondMean/y));
        } 
    }
    return -1;
}
*/
/*
const getMean = (arr, x, y) =>
  x <= 1 || y <= 1 || x > arr.length || y > arr.length ? -1 :
  (arr.slice(0, x).reduce((pre, val) => pre + val) / x + arr.slice(-y).reduce((pre, val) => pre + val) / y) / 2;

*/
/*
const result = getMean(array, x, y);
console.log(result)

*/

let text = 'loopingisfunbutdangerous'
let text2 = 'lessdangerousthancoding'


/*
var sortAlphabets = function(text) {
    return text.split('').sort().join('');
};

console.log(sortAlphabets(text))
*/

//console.log(text2.split('').sort())
//let newString = text.concat(text2)
//console.log(newString.split('').sort().filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join(''))

function longest(s1, s2) {
    let newString = s1.concat(s2)
    return newString.split('').sort().filter(function(item, i, arr){return arr.indexOf(item)==i}).join('');
   }
  
  console.log(longest(text, text2))

  //

  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
