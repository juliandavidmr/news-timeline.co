import pkg from './package.json';
import css from "rollup-plugin-import-css";

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/main.js',
    external: [],
    output: [
      { file: pkg.main, format: 'iife' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      css()
    ]
  },
];
