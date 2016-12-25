const path = require('path')
const fs = require('fs')
const exec = require('child_process').exec
const shellEscape = require('shell-escape')
const EXT = require('./ext')

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
  const cmdOpts = ['docker-compose', '-f', composePath, 'run', language, '-c', solution, '-t', 'cw', '-f', fixtures]
  if (language === 'javascript') cmdOpts.push('--languageVersion', '6.x/babel') // TODO: Configurable
  const command = shellEscape(cmdOpts)
  exec(command, (error, stdout, stderr) => {
    !error ? console.log(stdout) : console.error(stderr)
  })
}

module.exports = verify
