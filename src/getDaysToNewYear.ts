/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let currentDate: Date;

  if (typeof targetDate === "string") {
    const [day, month, year] = targetDate.split(".").map(Number);

    if (!day || !month || !year || month < 1 || month > 12 || day < 1 || day > 31) {
      throw new Error("Invalid date format");
    }

    currentDate = new Date(year, month - 1, day);
  } else {
    currentDate = new Date(targetDate);
  }
  const newYear = new Date(2024, 0, 1);
  const timeDiff = newYear.getTime() - currentDate.getTime();
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
};

