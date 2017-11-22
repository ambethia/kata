const IMAGES = {
  c: 'qualified/systems-runner',
  clojure: 'qualified/jvm-runner',
  cpp: 'qualified/systems-runner',
  javascript: 'qualified/node-runner',
  kotlin: 'qualified/gradle-runner',
  scala: 'qualified/gradle-runner',
  sql: 'qualified/ruby-runner',
  typescript: 'qualified/node-runner',
  undefined: 'qualified/base-runner'
}

module.exports = language => IMAGES[language] || `qualified/${language}-runner`
