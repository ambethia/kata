#!/usr/bin/env node --harmony

const [command, ...options] = process.argv.slice(2)
const ConfigStore = require('configstore')
const setup = require('../lib/setup')
const pkg = require('../package.json')
const train = require('../lib/train')
const verify = require('../lib/verify')
const watch = require('../lib/watch')
const config = new ConfigStore(pkg.name)
const HELP = `
  Usage
    $ kata COMMAND [OPTIONS]
  Commands
    setup [LANGUAGE]
      Downloads docker images and prompts you for your Codewars access token.
    train [URL] | [KATA_ID LANGUAGE]
      Downloads the starter solution and example test files and places
      them into a directory like 'LANGUAGE/name-of-kata' in your current path.
      Automatically begins watch.
    watch PATH [LANGUAGE]
      Watch for file changes at PATH and run verify continiously when they change.
      The language is optional if your path is something like: 'LANGUAGE/name-of-kata'.
    verify PATH [LANGUAGE]
      Runs your code against the test file using the official Code Wars Docker images.
      The language is optional if your path is something like: 'LANGUAGE/name-of-kata'.
  Examples
    $ kata train 50654ddff44f800200000004 javascript
    $ kata train https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
    $ kata train https://www.codewars.com/kata/multiply
    $ kata watch ./javascript/name-of-kata
    $ kata watch . javascript

  You will need Docker to verify katas.
`

const run = config => {
  switch (command) {
    case 'train':
      train(config, ...options)
      break
    case 'setup':
      setup(config, ...options)
      break
    case 'verify':
      verify(...options)
      break
    case 'watch':
      watch(...options)
      break
    default:
      console.log(HELP)
      break
  }
}

const token = config.get('token')
if (token !== undefined) {
  run(config)
} else {
  setup(config, ...options)
}
