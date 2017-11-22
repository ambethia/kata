const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const exec = require('child_process').exec
const shellEscape = require('shell-escape')
const ext = require('./ext')
const printer = require('./printer')
const runner = require('./runner')

const FRAMEWORKS = {
  swift: 'xctest',
  typescript: 'mocha'
}

const verify = (pathToKata, language) => {
  pathToKata = path.resolve(pathToKata || '.')
  language = language || pathToKata.split(path.sep).slice(-3, -1)[0]
  const solutionExt = ext(language)
  if (!solutionExt) console.error('No support for language:', language)
  const solutionPath = path.resolve(
    pathToKata,
    ['solution', solutionExt].join('.')
  )
  const fixtureExt = language === 'sql' ? 'rb' : solutionExt
  const fixturesPath = path.resolve(
    pathToKata,
    ['fixtures', fixtureExt].join('.')
  )
  const solution = fs.readFileSync(solutionPath).toString()
  const fixtures = fs.readFileSync(fixturesPath).toString()

  const framework = FRAMEWORKS[language] || 'cw'
  const cmdOpts = [
    'docker',
    'run',
    '--rm',
    runner(language),
    'run',
    '--language',
    language,
    '--test-framework',
    framework,
    '--code',
    language === 'sql' ? `"${solution}"` : solution
  ]

  if (fixtures.length > 0) cmdOpts.push('--fixture', fixtures)

  const command = shellEscape(cmdOpts)

  exec(command, (_, stdout, stderr) => {
    if (stderr) {
      console.log(chalk.black.bgRed.bold(stderr))
    }
    if (stdout) {
      printer(stdout)
    }
  })
}

module.exports = verify
