const FRAMEWORKS = {
  crystal: 'spec',
  dart: 'test',
  erlang: 'eunit',
  php: 'phpunit',
  rust: 'rust',
  swift: 'xctest',
  objc: 'unitkit',
  typescript: 'mocha'
}

module.exports = language => FRAMEWORKS[language] || 'cw'
