/*
 *
 * Author: Shah Arafat
 * Date: 2nd January 2021
 *
 */

function getIndexToIns(arr, num) {
   arr.push(num)
   arr.sort((a, b) => a - b);
   for (let i = 0; i < arr.length; i++){
     if (num === arr[i]) {
       num = i;
       break;
     }
   }
  return num;
}

console.log(

getIndexToIns([], 15)
);
