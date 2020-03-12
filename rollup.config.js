import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.min.js',
      format: 'iife',
      name: 'hashjs'
    },
  ],
  plugins: [resolve(), commonjs({
    include: 'node_modules/**'
  }), terser()]
};