/*
 *
 * Author: Shah Arafat
 * Date: 2nd January 2021
 *
 */

function bouncer(arr) {
  for (let i = 0; i < arr.length; i++) {
    let toBoolean = Boolean(arr[i]);
    if (!toBoolean) {
      arr.splice(i, 1);
      i = -1;
    }
  }
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(
bouncer(["a", "b", "c"])
);
console.log(
  bouncer([false, null, 0, NaN, undefined, ""])
);