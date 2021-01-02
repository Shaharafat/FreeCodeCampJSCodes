/*
 * Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

/*
 *
 * Author: Shah Arafat
 * Date: 1st January 2021
 * 
*/

function largestOfFour(arr) {
  let largestNumber = Number.NEGATIVE_INFINITY ;
  let largestArray = [];

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {

      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
      
    }

    largestArray.push(largestNumber);
    largestNumber = Number.NEGATIVE_INFINITY;
  }
  console.log(largestArray);
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])