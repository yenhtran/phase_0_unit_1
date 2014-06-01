// I paired [by myself, with:] on this challenge.

// __________________________________________
// Write your code below.

var secretNumber = 7
var password = "just open the door"
var allowedIn = false
var members = ["John", "Yen", "Whiskey", "Mary"]


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// What parts of your strategy worked? What problems did you face?
// My strategy was to run the test in node. Needed to ask a fellow 
// classmate to understand how to run Node in the first place. Once 
// was able to start it and run a couple of errors, I figured it out.
// 
// What questions did you have while coding? What resources did you find to help you answer them?
//Just how to run the test in the first place. Was able to reach out to 
//a fellow classmate for help. Also had to refer to Js tutorials to setup
//the Js code.
//
//Did you learn any new skills or tricks?
//Tons of Js and Node. Although I feel like I need to go and find additional
//Js tutorials and exercises to cement my learning.
//
//How confident are you with each of the Learning Competencies?
//Unfortunately I'm not feeling confident on many of the JavaScript
//stuff. Hopefully practice will cement it.
//
//Which parts of the challenge did you enjoy?
//Completing the test and going over the JS labs
//
//Which parts of the challenge did you find tedious?
//Understanding how to run a TTD. I wish there was some intial 
//step-by-step instructions on how to set it up.
// 
// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

