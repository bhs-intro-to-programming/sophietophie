const getX = (obj) => {
  return obj.x;
}
const point = (num1, num2) => {
  return { x: num1, y: num2 }
}
const emptyObject = () => {
  const obj = {}
  return obj
}
const distance = (p1, p2) => {
  return Math.sqrt((Math.abs(p1.x - p2.x) ** 2) + (Math.abs(p1.y - p2.y) ** 2))
}
const midpoint = (p1, p2) => {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2
  }
}
const sumSalaries = (ar) => {
  let total = 0
  for (let i = 0; i < ar.length; i++) {
    total = total + ar[i].salary
  }
  return total
}
const newHighScore = (currentHigh, objAr) => {
  let high = currentHigh
  for (let i = 0; i < objAr.length; i++) {
    if (objAr[i].score > high) {
      high = objAr[i].score
    }
  }
  return high
}
const summarizeBooks = (bookAr) => {
  let title = []
  let pages = 0
}
