import { Fragment, useMemo } from 'react'
import ReactMarkdown from 'react-markdown'

import packageJson from '../../package/package.json'
import t from '../data/typedoc.json'
// eslint-disable-next-line import/extensions
import { CodeBlock } from './components/code-block'

const baseconf = '' // "/utils"; // vite.config.ts => base

type CateType = {
  id: number
  name: string
  signatures: unknown
  summary: string
  code: string
  slug: string
}

const byCategory: Record<string, CateType[]> = {}

for (const item of t.children) {
  const { name, id, signatures } = item.children[0]
  const summary = signatures[0].comment.summary[0].text
  const code = signatures[0].comment.blockTags[0].content[0].text
  const category = item.groups[0].categories[0].title

  const details = {
    code,
    id,
    name,
    signatures,
    slug: item.name,
    summary,
  }

  if (byCategory[category]) {
    byCategory[category].push(details)
  } else {
    byCategory[category] = [details]
  }
}

const siteMetaData = {
  author: 'Balac',
  desc: '一个 JavaScript 公用方法集合',
  title: 'Utils',
}

function cls(...rest: any) {
  let string_ = ''

  rest.forEach((item: any) => {
    if (typeof item === 'string') {
      string_ = `${string_} ${item}`
    } else {
      for (const key in item) {
        if (item[key]) {
          string_ = `${string_} ${key}`
        }
      }
    }
  })

  return string_
}

const Home: any = ({ basename = '', isMicro = false }: any) => {
  const basepath = basename + baseconf

  const menus = useMemo(() => {
    return Object.entries(byCategory)
      .sort()
      .map(([category, utils]) => (
        <div key={category}>
          <h2 className="text-gray-500">{category}</h2>
          {utils.map((item) => (
            <ul key={item.id}>
              <li>
                <a
                  className="block cursor-pointer truncate rounded px-4 py-2 font-medium hover:bg-primary hover:text-white"
                  href={`#${item.name}`}
                >
                  {item.name}
                </a>
              </li>
            </ul>
          ))}
        </div>
      ))
  }, [])

  const list = useMemo(() => {
    return Object.entries(byCategory)
      .sort()
      .map(([category, utils]) => (
        <Fragment key={category}>
          {utils.map((item) => (
            <Fragment key={item.id}>
              <h2 className="scroll-mt-28" id={item.name}>
                <a href={`#${item.name}`}>{item.name}</a>
                <span
                  aria-label={`in ${category} category`}
                  className="ml-4 rounded bg-primary px-2 py-1 text-xs"
                  role="presentation"
                >
                  {category}
                </span>
              </h2>
              <ReactMarkdown>{item.summary}</ReactMarkdown>
              <ReactMarkdown components={{ code: CodeBlock }}>
                {item.code}
              </ReactMarkdown>
              <p className="text-gray-300">
                源码:{' '}
                <a
                  className="text-gray-300"
                  href={`${basepath}/coverage/${item.slug}.ts.html`}
                >
                  {item.slug}.ts
                </a>
              </p>
            </Fragment>
          ))}
        </Fragment>
      ))
  }, [])

  return (
    <div className="container" id="top">
      {isMicro ? null : (
        <header className="flex h-20 flex-col justify-center border-b border-primary bg-gray-900 md:container md:sticky md:top-0">
          <div className="flex items-center justify-between">
            <a
              className="flex items-center justify-center space-x-2 sm:justify-start"
              href="/"
            >
              {/* <img alt="" className="w-12" src="/logo2.png" /> */}
              <h1 className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-3xl font-bold leading-snug text-transparent">
                {siteMetaData.title}{' '}
                <span className="text-xs">{packageJson.version}</span>
              </h1>
            </a>

            <ul className="flex items-center space-x-4 md:-mr-4">
              <li>
                <a
                  aria-label="npm"
                  className="inline-block cursor-pointer rounded py-2 hover:bg-primary hover:text-white md:px-4"
                  href={`${basepath}/coverage/index.html`}
                >
                  测试覆盖率
                </a>
                {/* <a
                  aria-label="npm"
                  className="inline-block cursor-pointer rounded py-2 hover:bg-primary hover:text-white md:px-4"
                  href="https://www.npmjs.com/package/utils"
                >
                  npm
                </a>
              </li>
              <li>
                <a
                  aria-label="GitHub repository"
                  className="inline-block cursor-pointer rounded py-2 hover:bg-primary hover:text-white md:px-4"
                  href="https://github.com/will-stone/utils"
                >
                  GitHub
                </a> */}
              </li>
            </ul>
          </div>
        </header>
      )}

      {/* <aside className="fixed bottom-5 top-20 hidden overflow-y-auto overflow-x-hidden pt-16 scrollbar scrollbar-track-gray-900 scrollbar-thumb-gray-500 md:block md:w-40 lg:w-60"> */}
      <aside
        className={cls(
          'fixed bottom-5 top-20 hidden overflow-y-auto overflow-x-hidden scrollbar-track-gray-900 scrollbar-thumb-gray-500 md:block md:w-40 lg:w-60',
          { 'pt-16': !isMicro },
        )}
      >
        <nav className="space-y-8 pb-16">{menus}</nav>
      </aside>

      <main
        className={cls('prose prose-lg prose-invert pb-32 md:ml-52 lg:ml-72', {
          'mt-16': !isMicro,
        })}
      >
        <p className="lead">
          {siteMetaData.desc}&nbsp;
          {/* <a href="https://github.balac2015.com/">{siteMetaData.author}</a>. */}
        </p>

        {/* Library Rules */}
        <h2>设计规则</h2>

        <ul>
          <li>零依赖</li>
          <li>不会抛出异常.</li>
          {/* <li>Never assume anything about input value(s).</li> */}
          <li>总会返回一个合理的默认值</li>
        </ul>

        {/* Naming */}
        <h3>命名规则</h3>

        <table>
          <thead>
            <tr>
              <th>Prefix 前缀</th>
              <th>Condition 返回</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {/* <code>check</code> */}
                <code>has</code>
              </td>
              <td>返回一个布尔值</td>
            </tr>
            <tr>
              <td>
                {/* <code>generate</code> */}
                <code>get</code>
              </td>
              <td>返回一个新数据</td>
            </tr>
            <tr>
              <td>
                <code>to</code>
              </td>
              {/* <td>Returns coerced input</td> */}
              <td>强制转换输入值</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <small>不返回数据的函数没有前缀</small>
              </td>
            </tr>
          </tbody>
        </table>

        <p>与这种优雅的变量命名没有冲突，例如：</p>

        <ReactMarkdown components={{ code: CodeBlock }}>
          {`
\`\`\`js
const isUnique = hasUnique([1, 2, 3])
\`\`\`
`}
        </ReactMarkdown>

        <h2>Install 安装</h2>

        <pre>
          {/* @ts-expect-error -- is this type wrong? */}
          <CodeBlock className="language-shell">npm i @balac/utils</CodeBlock>
        </pre>

        <hr />

        {list}

        <a
          className="fixed bottom-8 right-8 flex h-8 w-8 cursor-pointer items-center justify-center truncate rounded bg-gray-800/80 text-xs leading-none text-gray-100 no-underline hover:text-primary"
          href="/#top"
        >
          Top
        </a>
      </main>
    </div>
  )
}

export default Home
