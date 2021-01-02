/*
 *
 * Author: Shah Arafat
 * Date: 2nd January 2021
 *
 */

function chunkArrayInGroups(arr, size) {
  let newArr = [];

  for (let i = 0; ; i += size) {
    if((arr.length - i) > size){
      newArr.push(arr.slice(i, i + size));
    } else {
      newArr.push(arr.slice(i));
      return newArr;
    }
  }

}

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var arr2 = [];
//   for (var i = 0; i < arr.length; i += size) {
//     arr2.push(arr.slice(i, i + size));
//   }
//   return arr2;
// }
console.clear();
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 4));
