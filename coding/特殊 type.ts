/**
 * TypeScript 使用对象或数组的值、键创建联合类型
 * type Key = 'Array' | 'String' | 'Number'
 */

const array = [
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

// 1. 使用字符串数组创建联合类型
// type ArrTypes = 'Array' | 'String' | 'Number' ｜ 。。。
type ArrayTypes = (typeof array)[number]

const obj = {
  foo: 'k1',
  bar: 'k2',
  baz: 'k3',
} as const

// 2. 使用对象的键创建联合
// type ObjKey = 'foo' | 'bar' | 'baz'
type ObjKey = keyof typeof obj

// 3. 使用对象的值最为联合
// type ObjValue = 'k1' | 'k2' | 'k3'
type ObjValue = (typeof obj)[keyof typeof obj]

const objs = [
  { name: 'foo', other: 'something' },
  { name: 'bar', other: 'something' },
  { name: 'baz', other: 'something' },
] as const

// 4. 对象数组，没项的 name 创建联合
// type NameType = 'foo' | 'bar' | 'baz'
type NameType = (typeof objs)[number]['name']

// 5. 把联合作为对象键名
// const obj2: { foo?: boolean; bar?: boolean; baz?: boolean }
const keys = ['foo', 'bar', 'baz'] as const
const obj2: {
    [index in typeof keys[number]]?: boolean;
} = {}
keys.forEach((v) => (obj2[v] = true))
