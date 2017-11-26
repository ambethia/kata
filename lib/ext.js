const EXTENSIONS = {
  clojure: 'clj',
  coffeescript: 'coffee',
  crystal: 'cr',
  csharp: 'cs',
  javascript: 'js',
  kotlin: 'kt',
  ruby: 'rb',
  rust: 'rs',
  python: 'py',
  typescript: 'ts'
}

module.exports = language => EXTENSIONS[language] || language
