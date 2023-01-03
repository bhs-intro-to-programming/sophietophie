////////////////////////////////////////////////////////////////////////
// Scroll to the bottom to where it says "Write your code here ..." to actually
// write your code. Just above that is a list of Math functions that you might
// find useful. Everything before that you can safely ignore--I am providing
// functions and other constants you may need to use in our code but nothing
// that you need to change even necessarily understand the internals of. You
// will however need to understand how to use these functions and constants as
// described in the questions.

const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

/*
 * Log the object via console.log.
 */
const log = (x) => { console.log(x); }

/*
 * Record an okay object.
 */
const recordOk = (x) => { log(`OK: ${x}`); }

/*
 * Record a not-okay object.
 */
const recordNotOk = (x) => { log(`NOT OK: ${x}`); }

/*
 * Record a meh object.
 */
const recordMeh = (x) => { log(`MEH: ${x}`); }

/*
 * This one is some particular dark magic. Definitely don't worry about
 * what it's doing.
 */
const hash = (s) => {
  return [...JSON.stringify(s)]
    .reduce((hash, c) => ((hash << 5) + hash) + c.codePointAt(0), 5381);
};

/*
 * An arbitrary predicate on numbers you will use in one function.
 */
const isLeet = (n) => n % 1337 === 0;

/*
 * Return a random number between 0, inclusive, and 10,000, exclusive.
 */
const random10k = () => rand(10_000);

/*
 * Return true if the argument is "okay". This implementation treats roughly
 * half of all possible values as okay and the other half as not okay. Which are
 * which is essentially random but is stable.
 */
const isOk = (x) => hash(JSON.stringify(x)) % 2 == 0;

/*
 * Return true if the argument is "meh".
 */
const isMeh = (x) => !isOk(x) && hash(JSON.stringify(x)) % 3 == 0;

/*
 * Record a pair.
 */
const pair = (a, b) => {
  log(`pair: ${a},${b}`);
};

////////////////////////////////////////////////////////////////////////
// For your reference, here are some functions and constants from Math
// that you might find useful

// Math.PI - a constant giving the closest approximation of π available
// Math.abs(n) - a function that computes the absolute value of its argument
// Math.ceil(n) - a function that rounds its argument up to the nearest integer
// Math.floor(n) - a function that rounds its argument down to the nearest integer
// Math.max(a, b) - a function that returns the largest of its arguments
// Math.min(a, b) - a function that returns the smallest of its arguments
// Math.sqrt(n) - a function that returns the square root of its argument

////////////////////////////////////////////////////////////////////////
// Write your code here ...
const totalEggs = (hard, soft) => {
  return hard + soft;
};
const chocolatesPerPerson = (numC, numP) => {
  return numC / numP;
};
const extraChocolates = (numC, numP) => {
  return numC % numP;
};
const leftOut = (chocolates, people) => {
  Math.floor(chocolates / people);
};
const futureHour = (current, hours) => {
  return current + hours;
};
const presentsBudget = (friends, price) => {
  return friends * price;
};
const perPresent = (budget, presents) => {
  return budget / presents;
};
const wrapingCombos = (paper, ribbons, bows) => {
  return paper + ribbons + bows;
};
const biggestNumber = (digits) => {
  return Math.floor(digits);  
};
const itemsLeftOver = (numP, numI) => {
  return numI % numP;
};
const areaOfCircle = (radius) => {
  return Math.PI * radius ** 2;
};
const volumeOfCube = (length) => {
  return length ** 3;
};
const populationGrowthRate = (population, growth) => {
  return population * growth;
};
const earnedRunAverage = (earnedRuns, innings) => {
  return (earnedRuns / innings) * 9;
};
const valueOfJewels = (diamonds, emeralds, valueD, valueE) => {
  return (diamonds * valueD) + (emeralds * valueE);
};
const firstClassPostage = (ounces) => {
  return Math.ceil()
}
const weightOnJupiter = (weight) => {
  return weight * (JUPITER_GRAVITY / EARTH_GRAVITY);
};
const gravity = (mass1, mass2, distance) => {
  return ((mass1 * mass2) / distance ** 2) * G;
};
const averageWeight = (weight, items) => {
  return weight / items;
};
const hypotenuse = (length1, length2) => {
  return (length1 ** 2) + (length2 ** 2);
};
const maxRadius = (width, height) => {
  return width * height;
};
const numCircles = (radius, width) => {
  return Math.max(radius * width);
};
const fireAlarm = (alarm, smoke, drill) => {
  return alarm || smoke || drill;
};
const canBePresident = (age, naturalBorn, yearsInUS) => {
  return age >= 37 && naturalBorn && yearsInUS >= 14;
};
const willSeeTweet = (follow, retweet, blocked) => {
  return follow || retweet && !blocked;
};
const needHeavyCoat = (outside, cold) => {
  return outside && cold;
};
const needSunscreen = (beach, skiing) => {
  return beach && skiing;
};
const needMittens = (outside, warm) => {
  return outside && !warm;
};
const isVenomous = (striped, blue) => {
  return striped || !blue;
};
const isMagicNumber = (number) => {
  return number[42] || number[17];
};
const canSleepIn = (weekday, vacation) => {
  return !weekday || vacation;
};
const canGoToProm = (senior, invited, excluded) => {
  return senior || invited && !excluded;
};
const getsSpeedingTicket = (mph, grouchyCop) => {
  return (mph > 70 && !grouchyCop) || (mph > 65 && grouchyCop);
};
const evenGreaterThanZero = (num) => {
  return num / 2 === 0 && num > 0;
};
const isLeapYear = (year) => {
  return year / 4 === 0 || (year / 100 === 0 && year / 400 === 0);
};
const okaySpeed = (postedMph, carMph) => {
  return carMph >= postedMph + 10 || carMph <= postedMph - 10;
};
const twiceAsExpensive = (item1, item2) => {
  return item1 > (item2 * 2);
};
const winningRecord = (wins, losses, ties) => {
  return wins > losses + ties;
};
const aFartherThanB = (num1, num2, num3) => {
  return num3 - num1 > num3 - num2;
};
const firstFewEveryOther = (s) => {
  return s.substring(0, 2, 4);
};
const firstHalf = (s) => {
  return s.substring(0, s.length / 2);
};
const secondHalf = (s) => {
  return s.substring(s.length / 2);
};
const swapFrontAndBack = (s) => {
  return s.substring(s.length / 2) + s.substring(0, s.length / 2);
};
const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase();
};
const upDownLastCharacter = (s) => {
  return s[s.length - 1].toUpperCase() + s[s.length - 1].toLowerCase;
};
const firstAndLast = (s) => {
  return s[0] + s[s.length - 1];
};
const randomCharacter = (s) => {
  return rand(s);
};
const randomCharacterUpDown = (s) => {
  return rand(s).toUpperCase + rand(s).toLowerCase;
};
const isAllUpperCase = (s) => {
  return s.toUpperCase;
};
const sameIgnoringCase = (s1, s2) => {
  return s1 === s2;
};
const firstName = (s) => {
  return s.indexOf(0, ' ' - 1);
};
const lastName = (s) => {
  return s.indexOf(' ' + 1);
};
const initials = (s) => {
  return s[0] + s[' ' + 1];
};


