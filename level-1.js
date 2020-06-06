// Question 1
var noroff = "university";

// Question 2
var person = {
  student: "camilla",
  studentNumber: 221296,
};

// Question 3
var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// Question 4
var universityMath = [3, 5, 2, 5, 9];

for (var i = 0; i < universityMath.length; i++) {
  console.log(universityMath[i]);
}

// Question 5
for (var counter = 15; counter <= 25; counter++) {
  console.log(counter);
}

// Question 6
for (var counter = 15; counter <= 25; counter++) {
  console.log(counter);
  break;
}

// Question 7

var caArray = [
  // first item
  {
    assignment: "The last one",
    numberOfAssignments: 3,
    theTruth: true,
  },
  // second item
  {
    semester: "The second semester",
    numberOfSemesters: 2,
    theTruth: false,
  },
];

// Question 8

function whatIDontLike(disgustingFood) {
  console.log("I don't like " + disgustingFood);
}

whatIDontLike("mushroom");

// Question 9

function calculatorOfAge(personsAge1, personsAge2) {
  var ageDifference = personsAge2 - personsAge1;
  console.log(ageDifference);
}

calculatorOfAge(14, 27);

// Question 10

var emptyArray = [];

function acceptingArguments(argument1) {
  emptyArray.push(argument1);
}

acceptingArguments(87);
