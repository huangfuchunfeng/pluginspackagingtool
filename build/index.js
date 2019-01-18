import { task, series } from 'gulp'
import { builds } from './config'
import { getTasks } from './rollup'
const tasks = getTasks(builds)
task('build', series(tasks))
