/*
 *
 * Author: Shah Arafat
 * Date: 1st January 2021
 *
 */

function repeatStringNumTimes(str, num) {
  let finalString = "";

  if (num > 0) {

    for (let i = 1; i <= num; i++) {
      finalString += str;
    }

    return finalString;
  } else {
    return finalString;
  }

}

console.log(repeatStringNumTimes("abc", 3));
