// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


document.write("<h2>" + "The Fortune Teller" + "</h2>");

function tellFortune(numChildren, partnerName, location, jobTitle) {
  document.write("You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numChildren + " kids.");
}

tellFortune(6, "Big Mama Thornton", "Toronto", "CEO");
document.write("<br>");
tellFortune(3, "Nikka Costa", "Katmandu", "coder");
document.write("<br>");
tellFortune(2, "George Burgess", "Lesotho", "Rugby Player");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.


document.write("<h2>" + "The Age Calculator" + "</h2>")

var today = new Date();
var currentYear = today.getFullYear();
// console.log(birthYear);

function calculateAge(birthYear, currentYear) {
  document.write("Your current age is " + (currentYear - birthYear) + ".")
 }

calculateAge(1965, currentYear);
document.write("<br>");
calculateAge(1990, currentYear);
document.write("<br>");
calculateAge(793, currentYear);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.


document.write("<h2>" + "The Lifetime Supply Calculator" + "</h2>")


var MAX_AGE = 80;
  
function calculateSupply(age, dailyAmount) {
  var futureAmountConsumed = (MAX_AGE - age) * 365 * dailyAmount;
  document.write("You will need " + futureAmountConsumed + " grams of crack to last you until the ripe old age of " + MAX_AGE + ".");
}

calculateSupply(25, 20);
document.write("<br>");
calculateSupply(79, 15);
document.write("<br>");


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".


document.write("<h2>" + "The Geometrizer" + "</h2>")

function calcCircumference(radius){
 var circumference = (Math.PI * 2 * radius).toFixed(2); 
 document.write("The circumference is " + circumference);
}

function calcArea(radius) {
  var area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  document.write("The area is " + area);
}

calcCircumference(3.5);
document.write("<br>");
calcArea(3.5);
document.write("<br>");


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


document.write("<h2>" + "The Temperature Converter" + "</h2>")


function fahrenheitToCelsius(fahrenheitTemp) {
  var gradosCelsius = (((fahrenheitTemp - 32) * 5)/9.0).toFixed(2);
  document.write(fahrenheitTemp + "°F is " + gradosCelsius + "°C.");
}

function celsiusToFahrenheit(celsiusTemp){
  var gradosFahrenheit = ((celsiusTemp * 9)/5.0) + 32;
   document.write(celsiusTemp + "°C is " + gradosFahrenheit + "°F");
}

celsiusToFahrenheit(24);
document.write("<br>");
fahrenheitToCelsius(75);


