const chalk = require('chalk')

const printer = input => {
  console.log(input, '!!!')
  const log = l => console.log('  '.repeat(Math.max(tabs, 0)) + l, 'def')
  let tabs = 0
  input.split('\n').forEach(line => {
    console.log('line', line)
    line.replace(/<(\w+)::>(.*)/, (m, term, msg) => {
      console.log(term)
      switch (term) {
        case 'PASSED':
          log(chalk.green(msg).replace('Test Passed:', m => chalk.bold(m)))
          break
        case 'FAILED':
          log(chalk.red(msg))
          break
        case 'DESCRIBE':
          log(chalk.yellow('\nDescribe ' + chalk.bold(msg)))
          tabs++
          break
        case 'IT':
          log(chalk.blue('It ' + chalk.bold(msg)))
          tabs++
          break
        case 'COMPLETEDIN':
          tabs--
          if (msg.length > 0) {
            log(chalk.grey('Completed in ' + chalk.bold(msg) + 'ms'))
          }
          break
        default:
          console.log('default')
          log(msg)
          break
      }
    })
  })
}

module.exports = printer
