import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/static/',
  server: {
    host:'localhost',
    port: 5173,
    origin: 'http://localhost:5173',
  },
  build: {
    outDir: '../backend/registrosapp/registros/static/registros',
    assetsDir: 'assets',
    manifest: true,
    rollupOptions: {
      input: {
        'UserForm': path.resolve(__dirname, 'src/components/UserForm/index.jsx'),
        'DataTable': path.resolve(__dirname, 'src/components/DataTable/index.jsx'),
        'main': path.resolve(__dirname, 'src/main.jsx')
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
