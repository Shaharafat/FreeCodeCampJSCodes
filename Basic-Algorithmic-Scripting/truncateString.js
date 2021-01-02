/*
 *
 * Author: Shah Arafat
 * Date: 1st January 2021
 *
 */

function truncateString(str, num) {
  if (num === str.length || num > str.length) {
    return str;
  } else {
    let truncatedPortion = str.substring(0, num);
    return truncatedPortion + "...";
  }
}

// truncateString("A-tisket a-tasket A green and yellow basket", 8)
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);
