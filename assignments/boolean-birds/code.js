/*
 * Important facts about the birds of Booleana.
 *
 * Coloration and markings:
 *
 *   - Flobby Birds and Bloggy Birds are red.
 *   - Flibble Birds and Globby Birds are not red.
 *   - Flobby Birds and Flibble Birds are spotted.
 *   - Bloggy Birds and Globby Birds are not spotted.
 *
 * Diet:
 *
 *   - Flobby Birds eat fish, nuts, and worms.
 *   - Bloggy Birds eat mice, nuts, and worms.
 *   - Flibble Birds eat fish, mice, and worms.
 *   - Globby Birds eat fish, mice, and nuts.
 *
 */
//eatsNuts(isSpotted)
const isFlobbyBird = (isRed, isSpotted) => {
  return isRed&&isSpotted;
}
const isBloggyBird = (isRed, isSpotted) => {
  return isRed&&!isSpotted;
}
const isFlibbleBird = (isRed, isSpotted) => {
  return !isRed&&isSpotted;
}
const isGlobbyBird = (isRed, isSpotted) => {
  return !isRed&&!isSpotted;
}
const eatsWorms = (isFlobbyBird, isFlibbleBird) => {
  return isFlobbyBird||isFlibbleBird;
}
const eatsNuts = (isFlibbleBird) => {
  return !isFlibbleBird;
}