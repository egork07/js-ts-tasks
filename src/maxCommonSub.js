/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  const substrings = new Set();
  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j <= str1.length; j++) {
      substrings.add(str1.slice(i, j));
    }
  }
  
  let maxSubstr = '';
  for (let i = 0; i < str2.length; i++) {
    for (let j = i + 1; j <= str2.length; j++) {
      let substring = str2.slice(i, j);
      if (substrings.has(substring) && substring.length > maxSubstr.length) {
        maxSubstr = substring;
      }
    }
  }
};
