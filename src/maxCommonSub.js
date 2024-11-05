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
  let longestSubstring = '';
  let substringStartPosI;
  let substringStartPosJ;
  let substring = '';

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (
        str1[i] === str2[j] &&
        (substringStartPosI === undefined || substringStartPosI === i - 1) &&
        (substringStartPosJ === undefined || substringStartPosJ === j - 1)
      ) {
        substring += str1[i];

        substringStartPosJ = j;
        substringStartPosI = i;
      } else if (
        (substringStartPosJ === j - 1 && substringStartPosI === i - 1) ||
        substringStartPosJ === str2.length - 1 ||
        substringStartPosI === str1.length - 1
      ) {
        if (substring.length > longestSubstring.length) {
          longestSubstring = substring;
          i = -1;
        }
        substringStartPosJ = undefined;
        substringStartPosI = undefined;
        substring = '';
      }

      if (j === str2.length - 1 && i === str1.length - 1 && substring.length > longestSubstring.length) {
        longestSubstring = substring;
      }
    }
  }
  return longestSubstring;
};
