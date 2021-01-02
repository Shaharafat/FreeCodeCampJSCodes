/*
 * Find the Longest Word in a String
 * Return the length of the longest word in the provided sentence.

 * Your response should be a number.
*/

/*
 *
 * Author : Shah Arafat
 * Date : 1st January 2021
 * 
*/

function findLongestWordLength(str) {
  let longestLength = 0;
  let strArray = str.split(" ");

  for(let i = 0; i < strArray.length; i++){

    if(longestLength < strArray[i].length){
      longestLength = strArray[i].length;
    }

  }
  return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");