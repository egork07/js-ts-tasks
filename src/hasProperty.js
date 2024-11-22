/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
    if (typeof object !== "object" || object === null) {
        return false;
      }
    return prop in object
};
