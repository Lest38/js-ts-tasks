/**
 * Write a function that returns a function that will sort all it's arguments in an order
 * being specified by sortComparator function from TestUtils object
 *
 * Note: You MUST use a function sortComparator from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sortComparator: function() }} TestUtils
 * @returns {function}
 */
module.exports.sort = function sort(TestUtils) {
  return function (...args) {
    if (!Array.isArray(args)) {
      throw new TypeError('Input must be an array.');
    }

    const array = [...args]; // Copy the input to avoid mutating the original

    // Bubble Sort using the comparator
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (TestUtils.sortComparator(array[j + 1], array[j])) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }

    return array;
  };
};
