const FRAMEWORKS = {
  bf: 'cw-2',
  crystal: 'spec',
  dart: 'test',
  elixir: 'exunit',
  erlang: 'eunit',
  php: 'phpunit',
  rust: 'rust',
  swift: 'xctest',
  objc: 'unitkit',
  typescript: 'mocha'
}

module.exports = language => FRAMEWORKS[language] || 'cw'
