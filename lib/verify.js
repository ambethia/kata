const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const exec = require('child_process').exec
const shellEscape = require('shell-escape')
const EXT = require('./ext')
const printer = require('./printer')

const FRAMEWORKS = {
  typescript: 'mocha'
}

const verify = (pathToKata, language) => {
  pathToKata = path.resolve(pathToKata || '.')
  language = language || pathToKata.split(path.sep).slice(-2, -1)[0]
  const ext = EXT[language]
  if (!ext) console.error('No support for language:', language)
  const solutionPath = path.resolve(pathToKata, ['solution', ext].join('.'))
  const fixturesPath = path.resolve(pathToKata, ['fixtures', ext].join('.'))
  const composePath = path.resolve(__dirname, '../node_modules/codewars-runner-cli/docker-compose.yml')
  const solution = fs.readFileSync(solutionPath).toString()
  const fixtures = fs.readFileSync(fixturesPath).toString()
  const framework = FRAMEWORKS[language] || 'cw'
  const cmdOpts = ['docker-compose', '-f', composePath, 'run', language, '-c', solution, '-t', framework, '-f', fixtures]
  if (language === 'javascript') cmdOpts.push('--languageVersion', '6.x/babel') // TODO: Configurable
  const command = shellEscape(cmdOpts)
  exec(command, (_, stdout, stderr) => {
    if (stderr) {
      console.log(chalk.white.bgRed.bold(stderr))
      console.log(chalk.red(stdout))
    } else {
      printer(stdout)
    }
  })
}

module.exports = verify
