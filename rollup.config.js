import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/index.ts',
  output: {
    file: './web-gpio-elements.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    typescript()
  ]
}