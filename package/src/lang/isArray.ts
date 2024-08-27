import { checkArray } from '../common'

/**
 * 判断是否是数组
 * @category Lang
 * @param {un_known} 任意值
 * @returns {Boolean} 返回 true 表示是数组，false 为非数组
 * @example
 *
 * import { isArray } from '@balac/utils'
 *
 * isArray(1)   // false
 * isArray([])  // true
 */
const isArray = Array.isArray || checkArray

export default isArray
