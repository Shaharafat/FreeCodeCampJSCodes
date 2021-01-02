/*
 *
 * Author: Shah Arafat
 * Date: 1st January 2021
 * 
*/

function confirmEnding(str, target) {
  let targetLength = target.length;
  let strLength = str.length;
  let stringLastIndex = strLength - 1;
  let targetLastIndex = targetLength - 1;
  let lastPortionToMatch = str.substring(stringLastIndex - targetLastIndex);

  if (lastPortionToMatch === target) {
    return true;
  } else {
    return false;
  }
  
}
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

console.log(confirmEnding("Congratulation", "on"));