/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maxSubstring = '';

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      let substring = '';
      let k = i;
      let f = j;

      while (k < str1.length && f < str2.length && str1[k] === str2[f]) {
        substring += str1[k];
        k++;
        f++;
      }

      if (substring.length > maxSubstring.length) {
        maxSubstring = substring;
      }
    }
  }

  return maxSubstring;
};
