const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const exec = require('child_process').exec
const shellEscape = require('shell-escape')
const ext = require('./ext')
const printer = require('./printer')
const runner = require('./runner')

const FRAMEWORKS = {
  typescript: 'mocha'
}

const verify = (pathToKata, language) => {
  pathToKata = path.resolve(pathToKata || '.')
  language = language || pathToKata.split(path.sep).slice(-3, -1)[0]
  const fileExt = ext(language)
  if (!fileExt) console.error('No support for language:', language)
  const solutionPath = path.resolve(pathToKata, ['solution', fileExt].join('.'))
  const fixturesPath = path.resolve(pathToKata, ['fixtures', fileExt].join('.'))
  const solution = fs.readFileSync(solutionPath).toString()
  const fixtures = fs.readFileSync(fixturesPath).toString()
  const framework = FRAMEWORKS[language] || 'cw'
  const cmdOpts = [
    'docker',
    'run',
    '--rm',
    runner(language),
    'run',
    '-l',
    language,
    '-t',
    framework,
    '-c',
    solution
  ]

  if (fixtures.length > 0) cmdOpts.push('-f', fixtures)

  const command = shellEscape(cmdOpts)
  exec(command, (_, stdout, stderr) => {
    if (stderr) {
      console.log(chalk.white.bgRed.bold(stderr))
    }
    if (stdout) {
      printer(stdout)
    }
  })
}

module.exports = verify
