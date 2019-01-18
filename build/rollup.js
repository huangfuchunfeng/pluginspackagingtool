import { rollup } from 'rollup'
function tasks(builds) {
  const array = []
  builds.forEach(config => {
    array.push(function() {
      return rollup(config.input).then(bundle => {
        bundle.write(config.output).then(() => {
          console.log(blue(`-----------${config.name}-------------ok`))
        })
      })
    })
  })
  return array
}
function blue(str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}

export function getTasks(builds) {
  return tasks(builds)
}
