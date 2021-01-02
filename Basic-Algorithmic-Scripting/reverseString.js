/*
 * Reverse the provided string.

 * You may need to turn the string into an array before you can reverse it.

 * Your result must be a string.
*/

/*
 * Author: Shah Arafat
 * Date: 1st January 2021
*/

function reverseString(str) {
  let strArray = Array.from (str);
  let i = 0;
  let j = strArray.length - 1;
  for(i,j; i< strArray.length/2 ; i++, j--){
    let temp = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = temp;
  }
  str = strArray.join('');
  return str;
}

reverseString("hello");