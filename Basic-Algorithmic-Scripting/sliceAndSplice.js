/*
 *
 * Author: Shah Arafat
 * Date: 2nd January 2021
 *
 */

function frankenSplice(arr1, arr2, n) {
  let newArray = [];
  newArray = newArray.concat(arr2.slice(0, n), arr1, arr2.slice(n));
  return newArray;
}

console.clear();
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);
