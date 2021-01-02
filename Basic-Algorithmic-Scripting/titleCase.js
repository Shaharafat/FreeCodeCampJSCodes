/*
 *
 * Author: Shah Arafat
 * Date: 1st January 2021
 *
 */

function titleCase(str) {
  let lowerCaseString = str.toLowerCase();
  let updatedStr = '';
  let strArray = lowerCaseString.split(' ');

  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].split('');
    strArray[i][0] = strArray[i][0].toUpperCase();
    strArray[i] = strArray[i].join('');
  }

  return strArray.join(' ');
}
console.clear();
console.log(
titleCase("I'm a little tea pot")

);