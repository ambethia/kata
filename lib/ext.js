const EXTENSIONS = {
  clojure: 'clj',
  coffeescript: 'coffee',
  crystal: 'cr',
  csharp: 'cs',
  elixir: 'ex',
  erlang: 'erl',
  javascript: 'js',
  kotlin: 'kt',
  objc: 'm',
  ruby: 'rb',
  rust: 'rs',
  shell: 'sh',
  python: 'py',
  solidity: 'sol',
  typescript: 'ts'
}

module.exports = language => EXTENSIONS[language] || language
