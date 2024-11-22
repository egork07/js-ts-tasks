/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
   let sequence = []
   let firstSequence = [arr[0]]
   if (arr.length === 0) return []
   for(let i = 1;i<arr.length;i++){
      if(arr[i]===arr[i-1]){
        firstSequence.push(arr[i])
      }
      else {
        if (firstSequence.length > sequence.length) {
           sequence = firstSequence;
        }
        firstSequence = [arr[i]]
     }
   }
   if(sequence.length < firstSequence.length){
    sequence = firstSequence
   }
   return sequence

};
