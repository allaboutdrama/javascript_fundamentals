// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.


document.write("<h2>" + "My Top Choices" + "</h2>")

var faveThings = ["blue", "2001 Space Odyssey", "La Habana"];
var faveCategories = ["colour", "movie", "city"];

for (i = 0; i < faveThings.length;){
  for(j = 0; i < faveCategories.length; j++)
{
  document.write("My favorite " + faveCategories[i] + " is " + faveThings[i]);
  document.write("<br>");
  i++;
}
}