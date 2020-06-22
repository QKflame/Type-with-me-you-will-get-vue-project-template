/** 实现的深拷贝函数 */
export function deepCopy (source) {
  // 声明基本数据类型
  const basicDataTypeList = ['[object Number]', '[object String]', '[object Null]', '[object Undefined]', '[object Boolean]', '[object Symbol]']
  const sourceDataType = Object.prototype.toString.call(source)

  // 如果 source 的数据类型是基本数据类型，则直接返回该值
  if (basicDataTypeList.indexOf(sourceDataType) > -1) {
    return source
  } else {
    // 判断如果是对象
    if (sourceDataType === '[object Object]') {
      const obj = {}
      Object.keys(source).forEach(key => {
        obj[key] = deepCopy(source[key])
      })
      return obj
    } else if (sourceDataType === '[object Array]') {
      const arr = []
      source.forEach(item => {
        arr.push(deepCopy(item))
      })
      return arr
    } else {
      // eslint-disable-next-line no-eval
      return eval(source.toString())
    }
  }
}
