const generalAverage = (total, count) => {
  return (total/count);
}
const averageOfThree = (a, b, c) => {
return (a+b+c)/3;
}
const product = (a, b) => {
  return (a*b);
}
const manhattanDistance = (x1, y1, x2, y2) => {
  return math.abs(x1-x2)+math.abs(y1-y2);
}
const twoDDistance = (x1, x2, y1, y2) => {
  return math.sqrt((math.abs(x1-x2)**2) + (math.abs(y1-y2)**2));
}