// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const itemsLeftOver = (people, items) => {
  return (people/items);
}
const areaOfCircle = (radius) => {
  return (Math.PI*radius)**2;
}
const volumeOfCube = (cubeLength) => {
  return (cubeLength*4);
}
const populationGrowth = (populationSize, growthRate) => {
  return (populationSize+growthRate);
}
const earnedRunAverage = (earnedRuns, innings) => {
  return (earnedRuns*innings)/2(*9);
}
const valueOfJewels = (emeralds, diamonds, diamondToGold, emeraldToGold) => {
  return (emeralds*emeraldToGold) + (diamonds*diamondToGold);
}
const payWithOverTime = (hours, hourlyRate, overTimeRate) => {
  return hours/(hourlyRate+overTimeRate);
}
const firstClassPostage = (weightOfLetter) => {
  return Math.Ceil(weightOfLetter);
}
const weightOnJupiter = (weightOfPersonOnEarth) => {
  return weightOfPersonOnEarth*(JUPITER_GRAVITY-EARTH_GRAVITY);
}
const gravity = (mass1, mass2, distanceBetweenMasses) => {
  return (mass1*mass2)/(distanceBetweenMasses**2);
}