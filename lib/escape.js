module.exports = (s) => {
  if (/[^A-Za-z0-9_/:=-]/.test(s)) {
    s = "'" + s.replace(/'/g, "'\\''") + "'"
    s = s.replace(/^(?:'')+/g, '').replace(/\\'''/g, "\\'")
  }
  return s
}
