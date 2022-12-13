const needHeavyCoat = (outside, cold) => {
  return outside && cold;
}
const needSunscreen = (beach, ski) => {
  return beach && ski;
}
const needMittens = (outside, warm) => {
  return outside && !warm;
}
const isVenomous = (striped, blueHead) => {
  return striped || !striped || !blueHead;
}
const okaySpeed = (speedLimit, carSpeed) => {
  return carspeed <= speedLimit + 10 && carSpeed >= speedLimit -10;
}
const twiceAsExpensive = (item1, item2) => {
  return item1 > item2 * 2;
}
const winningRecord = (wins, losses, ties) => {
  return wins > losses && ties;
}
const isMagicNumber = (s) => {
  return s = 42 || 17
}