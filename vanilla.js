/**
 * The value returned by `getDay()` for Sunday.
 * @type {Number}
 */
const SUNDAY = 0

module.exports = (firstDayOfMonth) => {
  /**
   * The number of weeks calculated by this algorithm. If the first day of the
   * month is not a Sunday, then this value starts off as 1 (because even a
   * partial week counts towards the total).
   * @type {Number}
   */
  let numberOfWeeks = (firstDayOfMonth.getDay() === SUNDAY ? 0 : 1)

  /**
   * The date of the "current" day in the following `do` loop. This always
   * starts as the first day of the specified month.
   * @type {Date}
   */
  let currentDay = new Date(firstDayOfMonth.getTime())

  /**
   * Start counting...
   */
  do {
    /**
     * If the current day is a Sunday, count another week.
     */
    if (currentDay.getDay() === SUNDAY) numberOfWeeks++

    /**
     * Increment `currentDay`. This uses a JS trick to calculate the next
     * calendar date.
     */
    currentDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() + 1)

    /**
     * When the end of the specified month is past, then `currentDay.getDate()`
     * will once again be equal to `1`. Until then, however, keep looping.
     */
  } while (currentDay.getDate() !== 1)

  return numberOfWeeks
}
