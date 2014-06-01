
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.
 

var adam = {
  name: "Adam",
 }

var terah = {
  spouse: adam,
  age: 32,
  height: 66,
  weight: 125,
  hairColor: "brown",
}

adam.spouse = terah

terah.children = {
    carson: {name: "Carson"},
    carter: {name: "Carter"},
    colton: {name: "Colton"}
    }

adam.children = terah.children


// __________________________________________
// Reflection: Use the reflection guidelines
// 
//This was harder than I thought it was going to be. There
//were multiple times when I was ready to throw 'terah' and 
//my computer out the window in frustration after spending 
//an hour trying to pass the test. 
//
//My strategy would be run test, read the report, if I couldn't
//get it, scroll the entire test looking for clues. The biggest 
//hurdles was understanding the nested properties when we hadn't 
//even learned them in the Js labs. The 'spouse' test was also confusing.
//I had to Google nested properties to figure out the program. 
//The rest I felt was sheer luck through trial/error.
// 
//The part of the challenge of this I enjoyed was when I completed 
//the exercise and all the test passed. What parts I felt annoyed 
//by was the exercise required understanding part of Js that wasn't
//covered in the labs that we needed to solve the challenge (nested 
//properties). I finally broke the rules and Googled it.
//
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)