import './index.css'
import 'tailwindcss/tailwind.css'

// import './tailwind.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import type { QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import {
  qiankunWindow,
  renderWithQiankun,
} from 'vite-plugin-qiankun/dist/helper'

import App from './App.tsx'

export type LifecycleType = (props: QiankunProps) => Promise<void> | void
export type EmptyfuncType = () => Promise<void> | void

export const render = (props: any) => {
  const { container, ...rest } = props || {}

  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const dom = (container || document).querySelector('#utils-root')!

  ReactDOM.createRoot(dom).render(
    <React.StrictMode>
      <App {...rest} isMicro={false} />
    </React.StrictMode>,
  )
}

export const mount: LifecycleType = (props: any) => {
  render(props)
  //  可以通过props读取主应用的参数：msg
  // 监听主应用传值
  props.onGlobalStateChange((res: any) => {
    console.log(res.count)
  })
}

export const bootstrap: EmptyfuncType = () => {
  // bootstrap
}

export const unmount: LifecycleType = () => {
  // unmount
}

export const update: LifecycleType = () => {
  // update
}

// 判断当前应用是否在主应用中
if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  // 当前应用在主应用中的生命周期
  // 文档 https://qiankun.umijs.org/zh/guide/getting-started#
  renderWithQiankun({ bootstrap, mount, unmount, update })
} else {
  render({})
}
