import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { version as pkgVersion } from './package.json'

process.env.VITE_APP_VERSION = pkgVersion
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

export default defineConfig({
  server: {
    port: 3000,
    host:"0.0.0.0",
    // host: "front.detecteev.localhost"

    watch: {
      // Watch additional files or directories here
      // ignored: ['!**/your-special-folder/**']
    },

    proxy: {
        "/backend": {
          target: "http://backend",
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/backend/, ""),
        },
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        'pinia',
        {
          '@/stores/store': ['useStore'],
          '@/stores/ad_groups_store': ['useAdGroupStore'],
          '@/stores/ad_group_item_store': ['useAdGroupItemStore'],

        },
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dirs: ['src'],
      extensions: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
