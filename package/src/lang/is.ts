import { checkArray, checkHelp } from '../common'

/**
 * 判断是否 Arguments 对象
 * @category Lang
 * @param {un_known} 任意值
 * @returns {Boolean} 返回布尔值
 * @example
 *
 * import { isArguments } from '@balac/utils'
 *
 * isArguments(1)   // false
 * isArguments(function() { return arguments; }())  // true
 */
export function isArguments(value: unknown): boolean {
  return checkHelp(value, 'Arguments')
}

export function isMath(value: unknown): boolean {
  return checkHelp(value, 'Math')
}

export function isJSON(value: unknown): boolean {
  return checkHelp(value, 'JSON')
}

export function isError(value: unknown): boolean {
  return checkHelp(value, 'Error')
}

export function isUndefined(value: unknown): boolean {
  return checkHelp(value, 'Undefined')
}

/**
 * 判断是否为Null
 * @param value
 * @returns
 */
export function isNull(value: unknown): boolean {
  return checkHelp(value, 'Null')
}

export function isDate(value: unknown): boolean {
  return checkHelp(value, 'Date')
}

/**
 * 判断是否方法
 * @param value
 * @returns
 */
export function isFunction(value: unknown): boolean {
  return checkHelp(value, 'Function')
}

export function isRegExp(value: unknown): boolean {
  return checkHelp(value, 'RegExp')
}

export function isBoolean(value: unknown): boolean {
  return checkHelp(value, 'Boolean')
}

export function isNumber(value: unknown): boolean {
  return checkHelp(value, 'Number')
}

export function isString(value: unknown): boolean {
  return checkHelp(value, 'String')
}

/**
 * 判断是否Object对象
 * @param value
 * @returns
 */
export function isObject(value: unknown): boolean {
  return checkHelp(value, 'Object')
}

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
export const isArray = Array.isArray || checkArray
