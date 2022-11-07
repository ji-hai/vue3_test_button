import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// elementPlus按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5174,
    open: true,
    host: '0.0.0.0'
  },
  plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: "sass" })],
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: "sass" })],
      })
  ],
  css: {
      preprocessorOptions: {
          scss: {
              additionalData: `@use "@/assets/style/element-theme.scss" as *;`,
          },
      },
  },
  resolve: {
      alias: {
          "@": path.resolve(__dirname, "src")
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'] // 类型： string[] 导入时想要省略的扩展名列表。
  }
})
