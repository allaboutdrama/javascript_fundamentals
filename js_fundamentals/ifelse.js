// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

document.write("<h2>" + "The Bigger Number" + "</h2>")

function greaterNum(x,y) {
  if (x > y) {
    document.write(x + " is bigger than " + y +".");
  } 
  else if (y > x) {
    document.write(y + " is bigger than " + x + ".");
  }

}

greaterNum(4,3);
document.write("<br>")
greaterNum(2,10);


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

document.write("<h2>" + "The World Translator" + "</h2>")

function helloWorld(language) {
  if (language === "español") {
    document.write("Hola, Mundo!");
  }
  else if (language === "deutsch"){
    document.write("Hallo, Welt!");
  }
  else 
    document.write("Hello, World!");
}

helloWorld("español");
document.write("<br>");
helloWorld("deutsch");
document.write("<br>");
helloWorld();

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

document.write("<h2>" + "The Grade Assigner" + "</h2>")

function assignGrade(score) {

  if (score < 20) {
    document.write("Your score is " + score + ". Your grade is F.");
  }

  else if (score < 40) {
    document.write("Your score is " + score + ". Your grade is D.");
  }

  else if (score < 60){
    document.write("Your score is " + score + ". Your grade is C.");
  }

  else if (score < 80) {
    document.write("Your score is " + score + ". Your grade is B.")
  }

  else if (score > 80) {
    document.write("Your score is " + score + ". Your grade is A.")
  }
  

}

assignGrade(15);
document.write("<br>");
assignGrade(35);
document.write("<br>");
assignGrade(55);
document.write("<br>");
assignGrade(75);
document.write("<br>");
assignGrade(95);


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


document.write("<h2>" + "The Pluralizer" + "</h2>")

function pluralize(number, noun) {


  if ( (number > 1) && (noun === "goose") ) {
    document.write(number + " geese.");
  }

  else if (number === 1) {
    document.write(number + " " + noun + ".");
  }

  else if (number > 1){
    document.write(number + " " + noun + "s.");
  }


}

pluralize(1, "cat");
document.write("<br>");
pluralize(5, "dog");
document.write("<br>");
pluralize(3, "goose");


