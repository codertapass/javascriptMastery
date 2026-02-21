console.log("tapas");
console.log(50 + 33 + 21 + 23);
console.log("bhubaneswar");
// these all are values and values is a piece of data.the most important thing is you can store value into variables.

let firstName = "Tapas";
firstName = "biju";
console.log(firstName);
// rules for variable declaration
// use camelCase notation to declare variable
// it can only be numbers,letters,underScore and dollar sign.
// variables cant start with numbers.
let _tapas = "pradhan";
console.log(_tapas);
// here we just wrote everything in the first place but instead of numbers everything putting on the first letters work properly.
let myFirstJob = "programmer";
let myCurrentJob = "teacher";
let job1 = "ooker";
let job2 = "cricketer";
// here we can easily identified which naming of variable is good and recommended.
// value and variables
const country = "india";
const continent = "asia";
let population = 1400000000;
console.log(country, continent, population);

// --------------------------------- Data types-----------------------
const isIsland = false;
let language;
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);
// --------------------------------let const var-------------------
let age = 30;
age = 31; //variable declaring with let is mutable it means you can reassign it.
const birthYear = 1993;
// birthYear = 1994; const declared variable is immutable

var college = "indus";
college = "mumbai";
//-----
language = "odia";
console.log(language);
//------
// Basic operators ----------------------------------
const now = 2047;
const ageTapas = now - 1991;
const ageSarah = now - 2018;
console.log(ageTapas, ageSarah);
console.log(ageTapas * 2, ageSarah / 10, 2 ** 3);

const firstNames = "Tapas";
const lastname = "Pradhan";
console.log(firstNames + " " + lastname);
// assignment operators
let x = 5;
x += 10;
x++;
x--;
x *= 100;
x /= 2;
console.log(x);
// comparison operator
console.log(ageTapas > ageSarah);
// problem
population / 2;
population++;
console.log(population);
const finlandPopulation = 6000000;
console.log(population > finlandPopulation);
const avgPopulation = 33000000;
console.log(population > avgPopulation);
const description =
  country +
  " is in " +
  continent +
  "," +
  " and its " +
  population +
  " crore people speak " +
  language;
console.log(description);
// string and template literals
const descriptionTwo = `${country} is in ${continent}, and its ${population} crore people speak ${language}`;
console.log(descriptionTwo);
// taking decesions
const ages = 14;
const isOldEnough = ages >= 18;
if (isOldEnough) {
  console.log("you are eligible for a DRIVING LICENCE");
} else {
  const ageNeed = 18 - ages;
  console.log(`you are ${ageNeed} years left behind to get a driving liocemce`);
}
// equality operator
const myAge = 25;
if (myAge === 18) {
  console.log("you are an dult");
} else {
  console.log("you are not an adult");
}

// const favourite = prompt("whats your favourite number ? ");

// if (favourite == 10) {
//   console.log("right");
// }
// logical operators
const hasDrivingLicense = false;
const hasGoodVision = true;
console.log(hasDrivingLicense || hasGoodVision); // true

// // equality operator problem
// const numNighbours = Number(
//   prompt("how many neighbour country does your country have ?"),
// );
// if (numNighbours === 1) {
//   console.log("Only 1 border");
// } else if (numNighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No border");
// }
// Logical operator problem
if (language === "english" || (population < 5000000 && !isIsland)) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} doesnot meet your criteria`);
}
// switch statement problem
switch (language) {
  case "mandarine":
  case "Chinese":
    console.log("Most number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in numbers of native speakers");
    break;
  case "english":
    console.log("3rd place in numbers of native speakers");
    break;
  case "odia":
    console.log("4th place in numbers of native speakers");
    break;
  default:
    console.log("Great language too");
}

// coding challenge -1
/**
 * Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall
 */

// const massMark = 78;
const massMark = 95;
// const heightMark = 1.69;
const heightMark = 1.88;
const markBmi = massMark / (heightMark * heightMark);
// const massJhon = 92;
const massJhon = 85;
// const heightJhon = 1.95;
const heightJhon = 1.76;
const jhonBmi = massJhon / (heightJhon * heightJhon);
console.log(markBmi, jhonBmi);
const markHigherBMI = markBmi > jhonBmi;
console.log(markHigherBMI);

// coding challenge 2
/**
 * Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
 */
if (markBmi > jhonBmi) {
  console.log(`Marks BMI ${markBmi} is higher than Jhons BMI ${jhonBmi}`);
} else {
  console.log(`Jhons BMI (${jhonBmi}) is higher than marks BMI (${markBmi})`);
}
// coding challenge 3
/**
 * There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */
const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log(`Dolphins ${avgDolphins} wins `);
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log(`Koalas ${avgKoalas} wins`);
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log("both teams win");
} else {
  console.log("no teams win");
}
// coding challenge 4
/**
 * Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
 */
let bill = 430;
let tip = bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
const total = `Bill is ${bill} tip is ${tip} and total billValue is ${bill + tip}`;
console.log(total);
