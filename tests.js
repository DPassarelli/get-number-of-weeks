/* eslint-env mocha */

const { expect } = require('chai')

/**
 * [testSuite description]
 *
 * @param  {any}   T   The exported value from the module under test.
 *
 * @return {undefined}
 */
function testSuite (T) {
  it('must export a function', () => {
    const expected = 'function'
    const actual = typeof T

    expect(actual).to.equal(expected)
  })

  it('must return an integer', () => {
    const expected = true
    const actual = Number.isInteger(T(new Date()))

    expect(actual).to.equal(expected)
  })

  it('must return the correct value for January 2021', () => {
    const expected = 6
    const actual = T(new Date(2021, 0, 1))

    expect(actual).to.equal(expected)
  })

  it('must return the correct value for February 2021', () => {
    const expected = 5
    const actual = T(new Date(2021, 1, 1))

    expect(actual).to.equal(expected)
  })

  it('must return the correct value for November 2020', () => {
    const expected = 5
    const actual = T(new Date(2020, 10, 1))

    expect(actual).to.equal(expected)
  })

  it('must return the correct value for October 2020', () => {
    const expected = 5
    const actual = T(new Date(2020, 9, 1))

    expect(actual).to.equal(expected)
  })

  it('must return the correct value for September 2020', () => {
    const expected = 5
    const actual = T(new Date(2020, 8, 1))

    expect(actual).to.equal(expected)
  })
}

describe('the "number of weeks" module', () => {
  context('implemented with vanilla JS', () => {
    testSuite(require('./vanilla.js'))
  })

  context('implemented with luxon', () => {
    testSuite(require('./luxon.js'))
  })
})
