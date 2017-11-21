const IMAGES = {
  c: 'codewars/systems-runner',
  cpp: 'codewars/systems-runner',
  javascript: 'codewars/node-runner',
  kotlin: 'qualified/gradle-runner',
  ruby: 'qualified/ruby-runner',
  scala: 'qualified/gradle-runner',
  typescript: 'codewars/node-runner',
  undefined: 'base-runner'
}

module.exports = language => IMAGES[language] || `codewars/${language}-runner`
