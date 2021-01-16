const { DateTime } = require('luxon')

/**
 * The value returned by `DateTime.weekday` for Sunday.
 * @type {Number}
 */
const SUNDAY = 7

module.exports = (firstDayOfMonth) => {
  /**
   * Convert the given value into an instance of `DateTime` (if necessary).
   */
  if (firstDayOfMonth instanceof Date) {
    firstDayOfMonth = DateTime.fromJSDate(firstDayOfMonth)
  }

  /**
   * The number of weeks calculated by this algorithm. If the first day of the
   * month is not a Sunday, then this value starts off as 1 (because even a
   * partial week counts towards the total).
   * @type {Number}
   */
  let numberOfWeeks = (firstDayOfMonth.weekday === SUNDAY ? 0 : 1)

  /**
   * The date of the "current" day in the following `do` loop. This always
   * starts as the first day of the specified month.
   * @type {Object}
   */
  let currentDay = DateTime.fromMillis(firstDayOfMonth.toMillis())

  /**
   * Start counting...
   */
  do {
    /**
     * If the current day is a Sunday, add another week.
     */
    if (currentDay.weekday === SUNDAY) numberOfWeeks++

    /**
     * Increment the current day.
     */
    currentDay = currentDay.plus({ days: 1 })

    /**
     * Once the current date has rolled over into a different month, then the
     * counting is done.
     */
  } while (currentDay.hasSame(firstDayOfMonth, 'month'))

  return numberOfWeeks
}
