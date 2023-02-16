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
  build: {
      outDir: 'lib',
      rollupOptions: {
          // 请确保外部化那些你的库中不需要的依赖
          external: ['vue'],
          output: {
              // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
              globals: {
                  vue: 'Vue',
              },
          },
      },
      lib: {
          entry: './packages/index.ts',
          name: 'vue3_test_button',
      }
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
