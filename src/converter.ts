/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  if (from === to) {
    return parseFloat(value.toFixed(2));
  }

  let convertedValue: number;

  if ((from === 'C' || from === 'K') && (to === 'C' || to === 'K')) {
    if (from === 'C' && to === 'K') {
      convertedValue = value + 273.15;
    } else if (from === 'K' && to === 'C') {
      convertedValue = value - 273.15;
    } else {
      convertedValue = value;
    }
  } else if ((from === 'm' || from === 'mi') && (to === 'm' || to === 'mi')) {
    const conversionRate = 1609.34;
    if (from === 'm' && to === 'mi') {
      convertedValue = value / conversionRate;
    } else if (from === 'mi' && to === 'm') {
      convertedValue = value * conversionRate;
    } else {
      convertedValue = value;
    }
  } else if ((from === 'gr' || from === 'pound') && (to === 'gr' || to === 'pound')) {
    const conversionRate = 453.592;
    if (from === 'gr' && to === 'pound') {
      convertedValue = value / conversionRate;
    } else if (from === 'pound' && to === 'gr') {
      convertedValue = value * conversionRate;
    } else {
      convertedValue = value;
    }
  } else {
    throw new Error('Wrong input :(');
  }

  return parseFloat(convertedValue.toFixed(2));
};
