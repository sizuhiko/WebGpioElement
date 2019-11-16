import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/index.ts',
  output: {
    file: './web-gpio-elements.bundled.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    typescript(),
    resolve()
  ]
}