import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/extension.ts',
  ],
  format: ['cjs'],
  outDir: 'out',
  shims: false,
  dts: false,
  external: [
    'vscode',
  ],
})
