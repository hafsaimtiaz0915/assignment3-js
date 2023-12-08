console.log("Chapter 6");
console.log("Practice Exercise 6.1");

function addNumbers(num1, num2) {
    return num1 + num2;
}
var firstNumber = 5;
var secondNumber = 7;
console.log("Result of adding", firstNumber, "and", secondNumber, ":", addNumbers(firstNumber, secondNumber));
var thirdNumber = 10;
var fourthNumber = 3;
console.log("Result of adding", thirdNumber, "and", fourthNumber, ":", addNumbers(thirdNumber, fourthNumber));

console.log("Practice Exercise 6.2");

var descriptiveWords = ["awesome", "creative", "energetic", "friendly", "intelligent", "joyful", "kind", "talented"];
function describeName() {
    var userName = prompt("Please enter a name:");
    var randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    var randomDescriptor = descriptiveWords[randomIndex];
    console.log("Description for", userName + ":", randomDescriptor);
}
describeName();

console.log("Practice Exercise 6.3");
var num1 = 10;
var num2 = 5;
var operator = "-";
function performOperation(value1, value2, operation) {
    if (operation === "+") {
        return value1 + value2;
    } else if (operation === "-") {
        return value1 - value2;
    } else {
        return value1 + value2;
    }
}
console.log("Result of", num1, operator, num2, "is:", performOperation(num1, num2, operator));
operator = "+";
console.log("Result of", num1, operator, num2, "is:", performOperation(num1, num2, operator));


console.log("Practice Exercise 6.4");

var resultsArray = [];

for (var i = 0; i < 10; i++) {
    var value1 = i * 5;
    var value2 = i * i;

    function calculateSum(param1, param2) {
        return param1 + param2;
    }

    var response = calculateSum(value1, value2);

    resultsArray.push(response);
}

console.log("Array of results:", resultsArray);

console.log("Practice Exercise 6.5");

let value = "1000";

(function () {
    let value = 10;
    console.log("Inside IIFE Function:", value);
})();

let result = (function () {
    let value = 120;
    return value;
})();
console.log("IIFE Expression Result:", result);

(function (paramValue) {
    let value = "Anonymous Function Scope: " + paramValue;
    console.log(value);
})(70);

console.log("Practice Exercise 6.6");

function calculateFactorial(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

var inputNumber = parseInt(prompt("Enter number for factorial:"));
if (!isNaN(inputNumber)) {
    console.log("Factorial of", inputNumber, "is:", calculateFactorial(inputNumber));
} else {
    console.log("Invalid input. Please enter a valid number.");
}

console.log("Practice Exercise 6.7");

let startValue = 10;

function countdown(value_a) {
  console.log("Countdown:", value_a);

  if (value_a < 1) {
    return;
  }

  value_a--;

  if (value_a > 0) {
    return countdown(value_a);
  }
}

countdown(startValue);

console.log("Practice Exercise 6.8");
let printToConsole = function (arg) {
    console.log(arg);
  };
  
  printToConsole("Hello from function expression!");
  function printToConsoleDeclaration(arg) {
    console.log(arg);
  }

  printToConsoleDeclaration("Hello from function declaration!");

  console.log("Chapter Project");
  

const countUpToTen = (startNumber) => {
    console.log(startNumber);
    if (startNumber < 10) {
      countUpToTen(startNumber + 1);
    }
  };
  
  countUpToTen(5);
  countUpToTen(8);
  const outputOne = () => console.log("One");
  const outputTwo = () => console.log("Two");
  const outputThree = () => {
    console.log("Three");
    outputOne();
    outputTwo();
  };
  
  const outputFour = () => {
    console.log("Four");
    setTimeout(() => outputOne(), 0);
    setTimeout(() => outputThree(), 0);
  };
  
  outputFour();
  

