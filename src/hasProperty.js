/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
const { prototype } = require('mocha');
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
    let a = 'ad';
    let r = Object.prototype.space_name;
    let b = Object.prototype;
    if (key === prop) {
      return true;
    }
  }

  return false;
  //return Object.prototype.hasOwnProperty.call(object, prop);
};
