# 使用

## getIntegers

<span class="VPButton medium brand">哈哈哈</span>

<span aria-label="in Array category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">Array</span>
生成一个从给定数字到另一个数字的整数数组。

```ts
import { getIntegers } from '@fish1024/utils'

getIntegers(1, 6) // [1, 2, 3, 4, 5, 6]
getIntegers("abc", 6) // [] - 有一个参数不是数字
```

## checkUnique

<span aria-label="in Array category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">Array</span>
检查数组项是否唯一。对于非数组的任何值将返回 true。

```ts
import { checkUnique } from '@fish1024/utils'

checkUnique([1, 2, 3]) // true
checkUnique([1, 1, 2]) // false
checkUnique('not array') // true
```

## checkCompactCase

<span aria-label="in String category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">String</span>
检查传入的字符串参数是否包含空格，非字符串、带空格返回 false

```ts
import { checkCompactCase } from '@fish1024/utils'

checkCompactCase('thisiscompact') // true
checkCompactCase('this is not compact') // false
checkCompactCase(123) // false - input is not a string
```

## checkLowerCase

<span aria-label="in String category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">String</span>
检查传入的字符串参数是否包含大写字母，包含大写字母、非字符串返回 false

```ts
import { checkLowerCase } from '@fish1024/utils'

checkLowerCase('this is lower') // true
checkLowerCase('This is not LOWER') // false
checkLowerCase(123) // false - input is not a string
```

## checkUrlAbsolute

<span aria-label="in String category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">String</span>
检查传入的 URL 字符串参数是否以协议开头来确定它是否是绝对路径，非字符串将返回 false

```ts
import { checkUrlAbsolute } from '@fish1024/utils'

checkUrlAbsolute("http://example.com/page") // true
checkUrlAbsolute("/page") // false
checkUrlAbsolute(123) // false - input is not a string
```

## toCompactCase

<span aria-label="in String category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">String</span>
从传入字符串参数中删除所有空白字符。

```ts
import { toCompactCase } from '@fish1024/utils'

toCompactCase('this is text') // thisistext
toCompactCase('someTEXT') // someTEXT
```

## toLetters

<span aria-label="in String category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">String</span>
从传入的字符串参数中删除所有非字母字符

```ts
import { toLetters } from '@fish1024/utils'

toLetters('this is text') // thisistext
toLetters('123-Text!!!') // Text
```

## checkBrowser

<span aria-label="in Environment category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">Environment</span>
检查当前代码是否在浏览器中运行

```ts
import { checkBrowser } from '@fish1024/utils'

checkBrowser() // true
```

## sleep

<span aria-label="in Misc category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">Misc</span>
暂停当前函数

```ts
import { sleep } from '@fish1024/utils'

await sleep(2000) // 暂停 2 秒
await sleep("abc") // 传人非数字的参数，暂停 0 秒
```

## toNumber

<span aria-label="in Number category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">Number</span>
将传入的参数作为数字返回，不能转换成数字则返回 0

```ts
import { toNumber } from '@fish1024/utils'

toNumber('this is text') // 0
toNumber('3') // 3
toNumber(0.4) // 0.4
toNumber(new Set([])) // 0
```

## toOrdinal

<span aria-label="in Number category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">Number</span>
如果可能，将数字转换为其序数字符串形式，否则返回第 0 个

```ts
import { toOrdinal } from '@fish1024/utils'

toOrdinal('this is text') // 0th
toOrdinal('3') // 3rd
toOrdinal('11') // 11th
toOrdinal(3.14) // 3.14th
```