/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function checkPrime(num) {
    if (num <= 1) {
      return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true;
  }
  return function(start, end) {
    const primesNums = []
    for (let i = start; i <= end; i++) {
      if (i <= highestNumber && checkPrime(i)) {
        primesNums.push(i)
      }
    }
    return primesNums; 
  };
};

