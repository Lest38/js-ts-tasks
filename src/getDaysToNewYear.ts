/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let currentDate: Date;

  if (typeof targetDate === 'string') {
    const [day, month, year] = targetDate.split('.').map(Number);
    if (day === undefined || month === undefined || year === undefined) {
      throw new Error('Invalid date');
    }
    currentDate = new Date(year, month - 1, day);
  } else {
    currentDate = new Date(targetDate);
  }

  const nextYear = 2023;
  const newYearEve = new Date(nextYear, 11, 31, 23, 59, 59);

  const timeDifference = newYearEve.getTime() - currentDate.getTime();

  return Math.round(timeDifference / (1000 * 60 * 60 * 24));
};
