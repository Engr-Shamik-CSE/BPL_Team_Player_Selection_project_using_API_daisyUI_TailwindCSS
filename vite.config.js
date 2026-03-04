import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/BPL_Team_Player_Selection_project_using_API_daisyUI_TailwindCSS/', // copy and paste 
  plugins: [react(), tailwindcss(), ],
})
