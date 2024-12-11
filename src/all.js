/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          result[index] = value;
          count += 1;
          if (count === promisesArray.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
};
