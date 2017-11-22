const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const request = require('superagent')
const watch = require('./watch')
const ext = require('./ext')

const API_BASE = 'https://www.codewars.com/api/v1'

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

  const URL = `${API_BASE}/code-challenges/${kata}/${language}/train`
  request
    .post(URL)
    .set('Authorization', config.get('token'))
    .end((err, response) => {
      if (err) console.error(err)
      if (response.body.success) {
        const kyu = `${response.body.rank * -1}-kyu`
        const slug = response.body.slug
        const pathToKata = path.join(language, kyu, slug)
        mkdirp(pathToKata, () => {
          const solution = path.join(
            pathToKata,
            ['solution', ext(language)].join('.')
          )
          const fixture = path.join(
            pathToKata,
            ['fixtures', ext(language)].join('.')
          )
          if (!fs.existsSync(solution)) {
            fs.writeFileSync(solution, response.body.session.setup)
          } else {
            console.log('Solution file exists, skipping creation.')
          }
          if (!fs.existsSync(fixture)) {
            fs.writeFileSync(fixture, response.body.session.exampleFixture)
          } else {
            console.log('Fixture file exists, skipping creation.')
          }
          console.log(`Setup kata in \`${pathToKata}\`.`)
          watch(pathToKata)
        })
      } else {
        if (response.body.reason === 'unauthorized') config.delete('token')
        console.error(response.body.reason)
      }
    })
}

module.exports = train
