/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  if (start > end) return 0; 
  const n = end - start + 1;
  return (start + end) * n / 2;
};
