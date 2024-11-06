/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  let removedArr = [];

  for (let elem of arr) {
    if (typeof elem === 'object' && elem !== null && typeof value === 'object' && value !== null) {
      if (JSON.stringify(elem) !== JSON.stringify(value)) {
        removedArr.push(elem);
      }
    } else {
      if (elem !== value) {
        removedArr.push(elem);
      }
    }
  }

  return removedArr;
};
