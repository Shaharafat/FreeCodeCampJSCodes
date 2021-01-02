/*
 *
 * Author: Shah Arafat
 * Date: 2nd January 2021
 *
 */

function mutation(arr) {
  let target = arr[1].toLowerCase();
  let test = arr[0].toLowerCase();
  for (let i = 0; i < arr[1].length; i++){
    if (test.indexOf(target[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["HELdsfLO", "hello"]));
