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
  return striped || !striped || !blueHead
}