import typescript from "rollup-plugin-typescript2";
import css from "rollup-plugin-import-css";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import progress from "rollup-plugin-progress";
import terser from "@rollup/plugin-terser";

import { readFile } from "fs/promises";
const pkg = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);
const input = "src/index.ts";

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const plugins = [
  progress(),
  typescript({
    // Rollup plugin for typescript with compiler errors. https://www.npmjs.com/package/rollup-plugin-typescript2
    useTsconfigDeclarationDir: true,
  }),
  commonjs({
    include: "node_modules/**",
  }),

  css(), // A Rollup plugin to import CSS into JavaScript https://www.npmjs.com/package/rollup-plugin-import-css
  terser(), // A Rollup plugin to generate a minified bundle with terser. https://www.npmjs.com/package/@rollup/plugin-terser
  babel({ babelHelpers: "bundled", exclude: "node_modules/**" }), // A Rollup plugin to transpile/polyfill with Babel. https://www.npmjs.com/package/@rollup/plugin-babel
];

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "esm",
    },
    context: "this",
    plugins,
    external,
  },
  // {
  //   input,
  //   output: {
  //     file: pkg.main,
  //     format: 'cjs',
  //   },
  //   plugins,
  //   external,
  // },
];
