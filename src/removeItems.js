/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  let newArray = []
  if(typeof value !== "number"){
    return arr
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== value){
      newArray.push(arr[i])
    }
  }
  return newArray
};
