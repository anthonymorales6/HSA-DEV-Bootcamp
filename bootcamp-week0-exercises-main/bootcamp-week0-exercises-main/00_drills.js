// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
function reverse(str) {
  splitString = str.split("");
  reverseArray = splitString.reverse();
  joinArray = reverseArray.join("");
  return joinArray;
}

// TODO - write a function which returns the factorial of a positive integer
function factorial(num) {
  
}

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
// const zip = (arr1, arr2) => {}

// TODO - Write a function which does the opposite of `zip()`
// const unzip = (arr) => {}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
// const shiftRight = (str, num) => {}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
// const announceDate = () => {}

module.exports = {
   reverse,
   factorial,
  // zip,
  // unzip,
  // shiftRight,
  // announceDate,
 }
