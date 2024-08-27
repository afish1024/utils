
# `@fish/utils`

A collection of small JavaScript utilities.

使用：

```bash
npm install @fish1024/utils

```

```ts
import { getIntegers } from "@fish1024/utils"

// 按需引入
import getIntegers from "@fish1024/utils/get-integers"
```


## issue

```sh
# 验证连接
ssh -T git@github.com

# 输出
# You've successfully authenticated, but GitHub does not provide shell access.

# 解决 git push 不成功
git remote set-url origin git@github.com:用户名/仓库名.git
```