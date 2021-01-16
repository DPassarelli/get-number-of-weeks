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
   * The date of the "current" day in the following `do` loop.
   * @type {Date}
   */
  const currentDay = new Date(firstDayOfMonth.getTime())

  /**
   * The date immediately following that of `currentDay`. This is used to check
   * if all of the days in the specified month have been accounted for.
   * @type {Date}
   */
  let nextDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() + 1)

  /**
   * Loop thru all the days in the specified month.
   */
  do {
    /**
     * If the current day is a Sunday, count another week.
     */
    if (currentDay.getDay() === SUNDAY) numberOfWeeks++

    /**
     * Increment the days for `currentDay` and `nextDay`. This is done by first
     * setting `currentDay` equal to the same calendar date as `nextDay`, and
     * then using a JS trick to calculate the next calendar day after that.
     */
    currentDay.setTime(nextDay.getTime())
    nextDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() + 1)

    /**
     * When the end of the specified month is past, then `currentDay.getDate()`
     * will once again be equal to `1`. Until then, however, keep looping.
     */
  } while (currentDay.getDate() !== 1)

  return numberOfWeeks
}
