const findFnord = (s) => {
  return s.indexOf('fnord')
}
const stringContains = (s1, s2) => {
  return s1.indexOf(s2) !== -1
}
const firstAndLast = (s) => {
  return s[0] + s[s.length - 1]
}
const swapFrontAndBack = (s) => {
  return s.substring(s.length/2) + s.substring(0, s.length/2)
}
const simplePigLatin = (s, v) => {
  return s.substring(v) + s.substring(0, v) + 'ay'
}
const isAllUpperCase = (s) => {
  return s.toUpperCase() === s
}
const sameIgnoringCase = (s1, s2) => {
  return s1.toLowerCase() === s2.toLowerCase()
}