/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  let isPrototype = false;
  do {
    Object.getOwnPropertyNames(Object.prototype).forEach(function (keyPrototype) {
      if (keyPrototype === prop) {
        isPrototype = true;
      }
    });
    if (isPrototype) {
      return true;
    }
  } while ((Object.prototype = Object.getPrototypeOf(Object.prototype)));
  for (let key in object) {
    if (key === prop) {
      return true;
    }
  }

  return false;
};
