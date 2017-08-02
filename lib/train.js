const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const request = require('superagent')
const watch = require('./watch')
const EXT = require('./ext')

const train = (config, kata, language) => {
  if (kata === undefined) {
    console.error('Kata is required.')
    process.exit(1)
  }
  if (kata.includes('codewars.com')) {
    const parts = kata.split('/')
    const k = parts.indexOf('kata') + 1
    const l = parts.findIndex(p => /(train|solutions|forks)/.test(p)) + 1
    kata = parts[k]
    language = language || parts[l === 0 ? k + 1 : l]
  }
  // TODO: Prompt for language if not given
  language = language || 'javascript'

  const URL = `https://www.codewars.com/api/v1/code-challenges/${kata}/${language}/train`
  request.post(URL).set('Authorization', config.get('token')).end((err, response) => {
    if (err) console.error(err)
    if (response.body.success) {
      const kyu = response.body.rank.name ? response.body.rank.name.replace(' ', '-') : 'none'
      const slug = response.body.slug
      const pathToKata = path.join(language, kyu, slug)
      mkdirp(pathToKata, () => {
        fs.writeFileSync(path.join(pathToKata, ['solution', EXT[language]].join('.')), response.body.session.setup)
        fs.writeFileSync(
          path.join(pathToKata, ['fixtures', EXT[language]].join('.')),
          response.body.session.exampleFixture
        )
        console.log(`Downloaded kata to \`${pathToKata}\`.`)
        watch(pathToKata)
      })
    } else {
      if (response.body.reason === 'unauthorized') config.delete('token')
      console.error(response.body.reason)
    }
  })
}

module.exports = train
