const prompt = require('prompt')
const path = require('path')
const spawn = require('child_process').spawn

const composePath = path.resolve(__dirname, '../node_modules/codewars-runner-cli/docker-compose.yml')

const IMAGES = {
  'c': 'systems',
  'cpp': 'systems',
  javascript: 'node',
  typescript: 'node',
  undefined: 'base'
}

const setup = async (config, language) => {
  if (config.get('token') === undefined) {
    prompt.message = 'CODEWARS'
    prompt.start()
    await prompt.get({
      properties: {
        token: {
          description: 'Access Token (Visit https://www.codewars.com/users/edit to find API token)',
          required: true
        }
      }
    }, (err, result) => {
      if (err) console.err(err)
      config.set('token', result.token)
      docker(language)
    })
  } else {
    docker(language)
  }
}

const docker = (language) => {
  const image = (IMAGES[language] || language) + '-runner'
  spawn('docker-compose', ['-f', composePath, 'pull', image], { stdio: 'inherit' })
  console.log('This might take a while...')
}

module.exports = setup
