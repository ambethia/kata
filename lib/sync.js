const request = require('superagent')

const API_BASE = 'https://www.codewars.com/api/v1'

const sync = (config, kata, language, solution, autoWatch) => {
  const URL = `${API_BASE}/code-challenges/${kata}/${language}/train`
  request
    .post(URL)
    .set('Authorization', config.get('token'))
    .end((err, response) => {
      if (err) console.error(err)
      if (response.body.success) {
      } else {
        if (response.body.reason === 'unauthorized') config.delete('token')
        console.error(response.body.reason)
      }
    })
}

module.exports = sync
