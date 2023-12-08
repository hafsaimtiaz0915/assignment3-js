console.log("Chapter 5");
console.log("Practice Exercise 5.1");

const maxValue = 10;
const solution = Math.floor(Math.random() * maxValue) + 1;
console.log("Solution:", solution);
let isCorrect = false;
while (!isCorrect) {
  const userGuess = Number(prompt(`Enter a number between 1 and ${maxValue}:`));
  if (userGuess === solution) {
    isCorrect = true;
    console.log("Congratulations! You guessed the correct number!");
  } else {
    if(userGuess > solution){
        console.log("Too high! Try again.")
    }
    else{
        console.log("Too low! Try again.")
    }
  }
}

console.log("Practice Exercise 5.2");


let counter = 0;
const increment = 5; 
do {
  console.log("Counter:", counter);
  counter += increment;
} while (counter < 100);
console.log("Counter reached 100 or more. Loop completed!");

console.log("Practice Exercise 5.3");

let myWork = [];
for (let i = 1; i <= 10; i++) {
    let status = true;
    if(i % 2 === 0 ){
        status =false
    }
  const lesson = {
    name: `Lesson ${i}`,
    status: status
  };
  myWork.push(lesson);
}
console.log(myWork);

console.log("Practice Exercise 5.4");

let myTable = [];
const numRows = 3; 
const numCols = 4; 
let count = 0;

for (let row = 0; row < numRows; row++) {
  let tempTable = [];
  for (let col = 0; col < numCols; col++) {
    count++;
    tempTable.push(count);
  }
  myTable.push(tempTable);
}
console.table(myTable);

console.log("Practice Exercise 5.5");
let grid = [];
const totalCells = 64;
let counta = 0;
let row = [];
for (let i = 0; i <= totalCells; i++){
  if (counta % 8 === 0) {
    if (row !== undefined) {
      grid.push(row);
    }}
    row = [];
  counta++;
  const cellValue = counta;
  row.push(cellValue);
  if (counta === 8) {
    grid.push(row);
  }
}
console.log(grid);

console.log("Practice Exercise 5.6");
let myArray = [];
for (let i = 0; i < 10; i++) {
  myArray.push(i);
}
console.log("Array:", myArray);
console.log("Using for loop:");
for (let j = 0; j < myArray.length; j++) {
  console.log("Index:", j, "Value:", myArray[j]);
}
console.log("Using for of loop:");
for (const value of myArray) {
  console.log("Value:", value);
}

console.log("Practice Exercise 5.7");
let myObject = {
    item1: "Value 1",
    item2: "Value 2",
    item3: "Value 3"
  };
  console.log("Object Properties and Values:");
  for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
  }
  let myArray2 = ["Value 1", "Value 2", "Value 3"];
  console.log("\nArray Values:");
  for (let i = 0; i < myArray2.length; i++) {
    console.log(`Index ${i}: ${myArray2[i]}`);
  }

  console.log("Practice Exercise 5.8");
let outputString = "";
const skipNumber = 5; 
for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    continue;
  }
  outputString += i;
}
console.log("Output with 'continue':", outputString);
outputString = "";
for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    break;
  }
  outputString += i;
}
console.log("Output with 'break':", outputString);

console.log("Chapter Project");
let multiplicationTable = [];
const tableSize = 10;
for (let i = 1; i <= tableSize; i++) {
  let tempRow = [];
  for (let j = 1; j <= tableSize; j++) {
    tempRow.push(i * j);
  }
  multiplicationTable.push(tempRow);
}
console.log("Multiplication Table:");
console.table(multiplicationTable);


  




