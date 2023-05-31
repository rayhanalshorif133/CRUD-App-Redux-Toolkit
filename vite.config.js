import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/CRUD-Using-Redux-Toolkit/",
  plugins: [react()],
})
