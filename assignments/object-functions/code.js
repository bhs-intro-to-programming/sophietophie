const getX = (obj) => {
  return obj.x;
}
const point = (num1, num2) => {
  return {x: num1, y: num2}
}
const emptyObject = () => {
  const obj = {}
  return obj
}
const distance = (p1, p2) => {
  return Math.sqrt((Math.abs(p1.x - p2.x)**2) + (Math.abs(p1.y - p2.y)**2))
}
const midpoint = (p1, p2) => {
  return {x: 0, y: 0}
}