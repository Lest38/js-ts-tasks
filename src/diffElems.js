/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  let differentElem = [];

  for (let elem = 0; elem < arr.length; elem++) {
    if (!differentElem.includes(arr[elem])) {
      differentElem.push(arr[elem]);
    }
  }
  return differentElem.length;
};
