const EXTENSIONS = {
  clojure: 'clj',
  crystal: 'cr',
  javascript: 'js',
  ruby: 'rb',
  python: 'py',
  typescript: 'ts'
}

module.exports = language => EXTENSIONS[language] || language
