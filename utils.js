
/**
 * The cloneIterable function is designed to create a shallow copy of various
 * types of iterable objects, in other words, it duplicates the iterable
 * object's elements into a new array.
 * 
 * Well I guess it just a spread operator in ES6
 */
export function a(e) {

  /**
   * i.Z
   */
  function isIterable(e) {
    if (
      'undefined' !== typeof Symbol &&
      null != e[Symbol.iterator] ||
      null != e['@@iterator']
    ) return Array.from(e)
  }

  /**
   * o.Z
   */
  function isSpecial(e, t) {
    if (e) {
      if ('string' === typeof e) return cloneArray(e, t)
      var n = Object.prototype.toString.call(e).slice(8, - 1)
      if ('Object' === n && e.constructor) {
        n = e.constructor.name
      }
      return 'Map' === n || 'Set' === n
        ? Array.from(n)
        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? cloneArray(e, t)
          : undefined
    }
  }

  /**
   * r.Z
   */
  function doClone(e, t) {
    (null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }

  return function (e) {
    if (Array.isArray(e)) {
      return doClone(e)
    }
  }(e) ||
    isIterable(e) ||
    isSpecial(e) ||
    function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }()
}
