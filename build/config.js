import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import { name, version } from '../package.json'
import path from 'path'
const banner =
  '/*!\n' +
  ` * ${name} ${version}\n` +
  ` * ${new Date().getFullYear()}\n` +
  ' * https://github.com/huangfuchunfeng/foreach-polyfill\n' +
  ' */'
const resolve = p => {
  return path.resolve(__dirname, '../src/', p)
}
const builds = [
  {
    name: 'arrayforeachpolyfill',
    input: {
      input: resolve('array-foreach-polyfill/index.js'),
      plugins: [
        babel({
          babelrc: false,
          presets: [['env', { modules: false }]]
        }),
        nodeResolve()
      ]
    },
    output: {
      file: resolve('../dist/array-foreach-polyfill.js'),
      format: 'umd',
      name: 'arrayForeach',
      banner
    }
  },
  {
    name: 'arrayforeachpolyfillmin',
    input: {
      input: resolve('array-foreach-polyfill/index.js'),
      plugins: [
        babel({
          babelrc: false,
          presets: [['env', { modules: false }]]
        }),
        nodeResolve(),
        uglify()
      ]
    },
    output: {
      file: resolve('../dist/array-foreach-polyfill.min.js'),
      format: 'umd',
      name: 'arrayForeach',
      banner
    }
  }
]

export { builds }
