/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  let newArray = []
  const num = 100
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]); 
    if (arr[i] % 2 !== 0) {
      newArray.push(num)
    }
  }
  return newArray
};
