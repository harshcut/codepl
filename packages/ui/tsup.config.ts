import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/**/*.{js,ts,jsx,tsx}'],
  format: ['esm'],
  dts: true,
  minify: true,
  outDir: 'dist',
  clean: true,
  external: ['react'],
  ...options,
}))
