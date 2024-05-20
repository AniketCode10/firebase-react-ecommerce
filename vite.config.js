// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
// export default defineConfig({



//   server: {
//     host: '0.0.0.0', // Bind to all available network interfaces
//     port: 5173, // Set your desired port number
//   },
// });

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
        host: '0.0.0.0', // Bind to all available network interfaces
        port: 5173, // Set your desired port number
      },
  build: {
    // Ensure production optimizations are enabled
    base:"/",
    minify: true,
    terserOptions: {
      compress: {
        // Enable dead code elimination
        dead_code: true,
      },
    },
  },
});