const EXTENSIONS = {
  clojure: 'clj',
  javascript: 'js',
  ruby: 'rb',
  python: 'py',
  typescript: 'ts'
}

module.exports = language => EXTENSIONS[language] || language
