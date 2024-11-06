/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  let replacedArr = [];
  for (let elem of arr) {
    let lessThanTenNum = Math.abs(elem / 10);
    if (lessThanTenNum < 1) {
      replacedArr.push(1);
    } else if (lessThanTenNum < 10) {
      replacedArr.push(2);
    } else if (lessThanTenNum < 100) {
      replacedArr.push(3);
    } else {
      replacedArr.push(4);
    }
  }

  return replacedArr;
};
