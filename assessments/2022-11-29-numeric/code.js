const totalEggs = (numHard, numSoft) => {
  return numHard + numSoft;
}
const chocolatePerPerson = (numChocolates, numPeople) => {
  return numChocolates / numPeople;
}
const extraChocolates = (numChocolates, numPeople) => {
  return numChocolates % numPeople;
}
const leftOut = (numChocolates, numPeople) => {
  return numPeople % numChocolates;
}
const probabilityAllHeads = (numFlips) => {
  return numFlips ** 2;
}
const futureHour = (currentHour, amountOfHours) => {
  return currentHour + amountOfHours;
}
const presentsBudget = (numFriends, averagePrice) => {
  return numFriends * averagePrice;
}
const perPresent = (totalBudget, numPresents) => {
  return totalBudget / numPresents;
}
const wrapingCombos = (numPaper, numRibbons, numBows) => {
  return numPaper * numRibbons * numBows;
}
const biggestNumber = (s) => {
  return Math.floor(s);
}