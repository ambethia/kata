const IMAGES = {
  bf: 'qualified/esolangs-runner',
  c: 'qualified/systems-runner',
  clojure: 'qualified/jvm-runner',
  coffeescript: 'qualified/node-runner',
  cpp: 'qualified/systems-runner',
  csharp: 'qualified/dotnet-runner',
  fsharp: 'qualified/dotnet-runner',
  groovy: 'qualified/gradle-runner',
  javascript: 'qualified/node-runner',
  kotlin: 'qualified/gradle-runner',
  php: 'codewars/alt-runner',
  scala: 'qualified/gradle-runner',
  shell: 'qualified/ruby-runner',
  sql: 'qualified/ruby-runner',
  typescript: 'qualified/node-runner',
  undefined: 'qualified/base-runner'
}

module.exports = language => IMAGES[language] || `qualified/${language}-runner`
