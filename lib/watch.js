const chokidar = require('chokidar')
const verify = require('./verify')

const watch = (...options) => {
  console.log(`Watching ${options[0]} for changes...`)
  verify(...options)
  chokidar.watch(options[0], { persistent: true }).on('change', () => {
    console.log('--------------------------------------------------')
    verify(...options)
  })
}

module.exports = watch
