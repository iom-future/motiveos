import process from 'node:process'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Configure environment-aware base path:
// - Uses '/motiveos/' for GitHub Pages (or dynamically resolves repository name from GITHUB_REPOSITORY)
// - Uses '/' for local development and standard Vercel deployments
const getBase = () => {
  if (process.env.GITHUB_PAGES || process.env.GITHUB_ACTIONS) {
    if (process.env.GITHUB_REPOSITORY) {
      const repo = process.env.GITHUB_REPOSITORY.split('/')[1]
      return repo && !repo.endsWith('.github.io') ? `/${repo}/` : '/'
    }
    return '/motiveos/'
  }
  return '/'
}

// https://vite.dev/config/
export default defineConfig({
  base: getBase(),
  plugins: [react(), tailwindcss()],
})
