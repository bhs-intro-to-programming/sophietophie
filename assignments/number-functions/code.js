const add = (num1, num2) => {
  return (num1+num2);
}
const subtract = (num1, num2) => {
  return (num1-num2);
}
const multiply = (num1, num2) => {
  return (num1*num2);
}
const divide = (num1, num2) => {
  return (num1/num2);
}
const mod = (num1, num2) => {
  return (num1%num2)
}
const averageOfTwo = (num1, num2) => {
  return (num1+num2)/2;
}
const averageOfThree = (num1, num2, num3) => {
  return (num1+num2+num3)/3;
}
const distance = (num1, num2) => {
  return Math.abs(num1-num2);
}
const manhattanDistance = (x1, x2, y1, y2) => {
  return Math.abs(x1-y1)+ Math.abs(x2-y2);
}
const euclideanDistance = (x1, y1, x2, y2) => {
  return Math.abs((x1-x2)**2)+Math.abs((y1-y2)**2);
}