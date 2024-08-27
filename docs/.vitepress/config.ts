import { defineConfig } from 'vitepress'
import pkg from '../../package.json'
import data from '../typedoc.json'

type Util = {
  id: number
  name: string
  signatures: unknown
  summary: string
  code: string
  slug: string
}

function prepareTypeDoc() {
  const byCategory: Record<string, Util[]> = {}
  
  for (const fn of data.children) {
    const { name, id, signatures } = fn.children[0]
    const summary = signatures[0].comment.summary[0].text
    const code = signatures[0].comment.blockTags[0].content[0].text
    const category = fn.groups[0].categories[0].title
  
    const details = {
        code,
        id,
        name,
        signatures,
        slug: fn.name,
        summary,
    }
  
    if (byCategory[category]) {
        byCategory[category].push(details)
    } else {
        byCategory[category] = [details]
    }
  }
  return Object.entries(byCategory)
}

function getSidebar() {
  const list = prepareTypeDoc()

  return list.map(cate => ({
    text: cate[0],
    items: cate?.[1]?.map(fn => {
      return {
        text: fn.name, 
        link: '/usage#' + fn.name.toLocaleLowerCase()
      }
    }) || []
  }))
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: pkg.name,
  description: pkg.description,
  themeConfig: {
  // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: '使用', link: '/usage' },
    //   // { text: '测试覆盖率', link: '/coverage' }
    // ],

    sidebar: getSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
