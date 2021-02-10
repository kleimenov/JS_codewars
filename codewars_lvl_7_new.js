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
const result = getMean(array, x, y);
console.log(result)

