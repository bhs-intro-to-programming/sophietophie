/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */
const drawLineCircle = (r) => {
  for (let i = 0; i < 10000; i++) {
    drawFilledCircle(i * r * 2, 180, r, 'red');

  }
}

//drawLineCircle(12)

const drawAlternatingCircle = (r) => {
  let s = 'red'
  for (let i = 0; i < 10000; i++) {
    drawFilledCircle(i * r * 2, 180, r, s);
    if (s === 'blue') {
      s = 'red'
    } else {
      s = 'blue'
    }
  }
}

//drawAlternatingCircle(12)

const drawAlternatingConcentricCircle = (r) => {
  let x = 0;
  while (x<100) {
    
  }
}