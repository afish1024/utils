const _toString = Object.prototype.toString

const parameters = [
  'Array',
  'String',
  'Number',
  'Boolean',
  'Object',
  'RegExp',
  'Function',
  'Date',
  'Null',
  'Undefined',
  'Arguments',
  'Error',
  'JSON',
  'Math',
] as const

// 数组的联合类型
type Types = (typeof parameters)[number]

const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
} as const

// 对象的联合类型
// type Keys = 'foo' | 'bar' | 'baz'
type Keys = typeof obj[keyof typeof obj]

const objs = [
  { name: 'foo', other: 'something' },
  { name: 'bar', other: 'something' },
  { name: 'baz', other: 'something' },
] as const

// type Keys2 = 'foo' | 'bar' | 'baz'
type Keys2 = typeof objs[number]["name"]




export function checkHelp(value: unknown, type: Types): boolean {
  return _toString.call(value) === `[object ${type}]`
}

export const checkArray = (value: unknown): boolean => {
  return checkHelp(value, 'Array')
}
