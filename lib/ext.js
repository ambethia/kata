const EXTENSIONS = {
  clojure: 'clj',
  coffeescript: 'coffee',
  crystal: 'cr',
  csharp: 'cs',
  elixir: 'ex',
  erlang: 'erl',
  fsharp: 'fs',
  haskell: 'hs',
  javascript: 'js',
  kotlin: 'kt',
  objc: 'm',
  ocaml: 'ml',
  ruby: 'rb',
  rust: 'rs',
  shell: 'sh',
  python: 'py',
  solidity: 'sol',
  typescript: 'ts'
}

module.exports = language => EXTENSIONS[language] || language
