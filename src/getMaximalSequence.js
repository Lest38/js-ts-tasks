/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxSequence = [];
  let sequence = [arr[0]];

  for (let i = 1; i < arr.length + 1; i++) {
    if (sequence[sequence.length - 1] === arr[i]) {
      sequence.push(arr[i]);
    } else {
      if (sequence.length > maxSequence.length) {
        maxSequence = sequence;
      }

      sequence = [arr[i]];
    }
  }

  return maxSequence;
};
