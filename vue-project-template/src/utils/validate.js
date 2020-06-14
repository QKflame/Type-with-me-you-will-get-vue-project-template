/**
 * 判断是不是外部链接
 * @param path
 * @returns {boolean}
 */
export function isExternal (path) {
  const reg = /^(https?:|mailto:|tel:)/
  return reg.test(path)
}

/**
 * 判断字符串是否是 JSON字符串
 * @param str
 * @returns {boolean}
 */
export function isJSON (str) {
  if (typeof str === 'string') {
    try {
      const result = JSON.parse(str)
      return Boolean(typeof result === 'object' && result)
    } catch (e) {
      return false
    }
  }
  return false
}
