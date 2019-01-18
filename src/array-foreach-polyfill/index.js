/**
 *  Array forEach 在有些浏览器的兼容问题修复
 */
export function polyfill() {
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
      var T, k
      if (this === null) {
        throw new TypeError(' this is null or not defined')
      }
      var O = Object(this)
      var len = O.length >>> 0
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function')
      }
      if (arguments.length > 1) {
        T = thisArg
      }
      k = 0
      var kValue
      while (k < len) {
        if (k in O) {
          kValue = O[k]
          callback.call(T, kValue, k, O)
        }
        k++
      }
    }
  }
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach
  }
}
