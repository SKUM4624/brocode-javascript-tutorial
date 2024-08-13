console.log("hello world");

// Variables
let firstName
let num;
let maidenless;
let numF;
let figures = 20;
// ----------------------------------------------------------------
firstName = "Saransh"; // This is a string, comprised of alphabetical characters.
num = 10; // This is an integer, a whole number used for equations and other things.
maidenless = true; // This is a boolean, which can either be true or not. Useful for if statements.
numF = 2.5; // This is a float. Floating point numbers are more versatile, and can be used for complex things.

console.log(figures);

console.log(firstName);
console.log(num);
console.log(numF);

if (maidenless === true) 
    {
        console.log(firstName, "is maidenless.");
    }

document.getElementById("p1").innerHTML = firstName + " is maidenless.";