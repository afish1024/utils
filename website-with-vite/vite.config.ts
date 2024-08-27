import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/utils',
  plugins: [
    // 在开发模式下需要把react()关掉
    // https://github.com/umijs/qiankun/issues/1257
    react(),
    qiankun(
      // 子应用名字，与主应用注册的子应用名字保持一致
      // 打包后 global.qiankunName = 'utils'; global['utils'] = {bootstrap,mount,unmount,update};
      'utils',
      {
        useDevMode: true,
      },
    ),
  ],
})
