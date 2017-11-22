const IMAGES = {
  c: 'codewars/systems-runner',
  clojure: 'codewars/jvm-runner',
  cpp: 'codewars/systems-runner',
  javascript: 'codewars/node-runner',
  kotlin: 'qualified/gradle-runner',
  scala: 'qualified/gradle-runner',
  typescript: 'codewars/node-runner',
  undefined: 'base-runner'
}

module.exports = language => IMAGES[language] || `qualified/${language}-runner`
