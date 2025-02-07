/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  let convertedValue: number; 

  const conversionRates: Record<string, (value: number) => number> = {
    "C-K": function (value) { return value + 273.15; },
    "K-C": function (value) { return value - 273.15; },
    "m-mi": function (value) { return value / 1609.34; },
    "mi-m": function (value) { return value * 1609.34; },
    "gr-pound": function (value) { return value / 453.592; },
    "pound-gr": function (value) { return value * 453.592; }
  };

  if (from === to) {
    convertedValue = value;
  } else {
    const key = from + "-" + to;
    const convertFn = conversionRates[key];

    if (!convertFn) {
      throw new Error("Conversion from " + from + " to " + to + " is not supported");
    }

    convertedValue = convertFn(value);
  }

  return parseFloat(convertedValue.toFixed(2));
};