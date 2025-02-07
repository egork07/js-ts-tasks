/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = async function all(promisesArray) {
  let result = [];
  
  for (let i = 0; i < promisesArray.length; i++) {
    result[i] = await promisesArray[i];
  }
  
  return result;
};