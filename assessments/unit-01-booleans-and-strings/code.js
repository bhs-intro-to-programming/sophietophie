/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (alarmPulled, smokeDetected, plannedDrill) => {
return alarmPulled || smokeDetected || plannedDrill;
}
const canBePresident = (age, naturalBorn, lived) => {
  return age >= 35 && naturalBorn, lived >= 14;
}
const willSeeTweet = (follow, followRetweet, blocked) => {
  return follow || followRetweet || !blocked;
}
const evenGreaterThanZero = (x) => {
  return x>0
}
const isLeapYear = (year) => {
  return even4(!even100||even400)
}
const firstAndLast = (s) => {
  return s[0]+s[s.length-1];
}
const swapFrontAndBack = (s) => {
  return s.substring(s.length/2) + s.substring(0, s.length/2);
}
}