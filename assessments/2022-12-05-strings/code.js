const upToX = (s) => {
  return s.substring(0, s.indexOf('x'))
}

const charactersAround = (s, i) => {
  return s.substring(i - 1) + s.substring(i + 1);
}
const middle = (s) => {
  return s.substring(0, s.length/2) + s.substring(s.length/2);
}
const pair = (s1, s2) => {
  return s1 + (' ') + ('and') + (' ') + s2;
}
containsX = (s) => {
  return s.substring('x');
}
const slug = (s1, s2, s3) => {
  return s1 + '-' + s2 + '-' + s3;
}
const capitalize = (s) => {
  return s.toUpperCase(0);
}
const capitalizeName = (s) => {
  return s.toUpperCase(0) + s.toUpperCase(s.length/2);
}