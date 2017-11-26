const EXTENSIONS = {
  clojure: 'clj',
  coffeescript: 'coffee',
  crystal: 'cr',
  csharp: 'cs',
  erlang: 'erl',
  javascript: 'js',
  kotlin: 'kt',
  objc: 'm',
  ruby: 'rb',
  rust: 'rs',
  python: 'py',
  solidity: 'sol',
  typescript: 'ts'
}

module.exports = language => EXTENSIONS[language] || language
