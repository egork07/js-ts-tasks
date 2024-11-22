/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
 firstPoint.X
 firstPoint.Y
 secondPoint.X
 secondPoint.Y
 const differenceX = secondPoint.X - firstPoint.X
 const differenceY = secondPoint.Y - firstPoint.Y
 const powNumX = Math.pow(differenceX, 2)
 const powNumY = Math.pow(differenceY, 2)
 const sum = powNumX +powNumY
 const squareOfSum = Math.sqrt(sum)
 const roundOffNum = squareOfSum.toFixed(2)
 return parseFloat(roundOffNum)
};

