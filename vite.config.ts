import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/AIFighterPredictions/',
  optimizeDeps: {
    exclude: ['onnxruntime-web']
  }
  // assetsInclude: ['**/*.onnx'],
  // server: {
  //   fs: {
  //     allow: ['.']
  //   }
  // }
})