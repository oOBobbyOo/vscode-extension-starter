import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/extension.ts',
  outDir: 'out',
  format: 'cjs',
  splitting: false,
  sourcemap: false,
  shims: false,
  declaration: true,
  external: ['vscode'],
})
