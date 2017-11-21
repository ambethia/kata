const prompt = require('prompt')
const spawn = require('child_process').spawn
const runner = require('./runner')

const setup = async (config, language) => {
  console.log(config.get('token'), 'token')
  if (config.get('token') === undefined) {
    prompt.message = 'CODEWARS'
    prompt.start()
    await prompt.get(
      {
        properties: {
          token: {
            description:
              'Access Token (Visit https://www.codewars.com/users/edit to find API token)',
            required: true
          }
        }
      },
      (err, result) => {
        if (err) console.err(err)
        config.set('token', result.token)
        docker(language)
      }
    )
  } else {
    docker(language)
  }
}

const docker = language => {
  spawn('docker', ['pull', runner(language)], {
    stdio: 'inherit'
  })
  console.log('This might take a while...')
}

module.exports = setup
