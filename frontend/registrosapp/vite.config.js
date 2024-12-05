import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
/*
export default defineConfig({
  plugins: [react()],
  server: {
      port: 5173,      // Puerto del servidor de desarrollo
      strictPort: true, // Evita cambiar el puerto si 5173 está ocupado
  },
  root: 'src',          // Define 'src' como el directorio raíz
});
*/

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // Asegura que Vite esté disponible en localhost
    port: 5173,        // Puerto del servidor de desarrollo
    strictPort: true,  // No cambia el puerto si 5173 ya está en uso
    
    proxy: {
      // Proxy para backend de Django
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      }, 
      '/register-form/': {
        target : 'http://127.0.0.1:8000',
        changeOrigin: true,
      }

    },
    
  },
  build: {
    outDir: path.resolve(__dirname, '../../backend/registroapp/registros/static/registros/dist'), // Ruta donde se colocará el build
    emptyOutDir: true, // Limpia la carpeta antes de generar el build
    rollupOptions: {
      input: './index.html', // Archivo principal para el build
    },
  },
})