// Question 1: Basic Types + Conditional Output
// --------------------------------------------
// Declare three variables: title (string), pages (number), and isPublished (boolean).
// Assign them values and log a message showing the book title and whether it’s published.
// If not published, log “Draft version”.

// Question 2: Arrays + Loops
// ---------------------------
// Create an array scores that holds only numbers.
// Add 5 sample scores and print the highest one using a for loop.

// Question 3: Enums + Branching Logic
// -----------------------------------
// Define a string enum LogLevel with values INFO, WARNING, and ERROR.
// Create a function logMessage(level: LogLevel) that prints a different message based on the log level.

// Question 4: Type Aliases
// ------------------------
// Create a type alias Product with properties name (string), price (number), and inStock (boolean).
// Then, log "Out of stock!" if inStock is false.

// Question 5: Function Typing + Type Guard
// ----------------------------------------
// Write a function greet that takes a name (string) or undefined and returns a greeting message.
// Use a type guard to handle undefined safely.

// Question 6: Interfaces + Conditional Validation
// -----------------------------------------------
// Define an interface Animal with properties species (string) and legs (number).
// Then, create a function validateAnimal that prints "Valid" if legs > 0, otherwise "Invalid".

// Question 7: Classes + Logical Method
// ------------------------------------
// Create a class Rectangle with width and height.
// Add a method area() that returns the area.
// If either value is <= 0, log "Invalid dimensions".

// Question 8: Type Assertion + typeof
// -----------------------------------
// Create a variable data of type any and assign an object { name: "Alex" }.
// Use a type assertion to treat it as { name: string } and log the name.
// Add a typeof check before accessing properties.

// Question 9: Literal Types + Switch Control
// ------------------------------------------
// Define a variable mode that can only be "auto", "manual", or "off".
// Use a switch statement to log what mode the system is in.

// Question 10: Generic Functions + Array Control
// ----------------------------------------------
// Write a generic function wrapValue<T>(value: T) that returns an array containing the value.
// Loop through the result using for...of to print each element.

// const title: string = "A christmas carol";
// const pages: number = 210;
// const isPublished: boolean = false;

// if (isPublished) {
//   console.log("It is published");
// } else {
//   console.log("Draft version");
// }

// const scores: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let highestScore = 0;

// for (let score of scores) {
//   if (score > highestScore) {
//     highestScore = score;
//   }
// }

// console.log(highestScore);

// enum logLevel {
//   INFO = "info",
//   WARNING = "warning",
//   ERROR = "error",
// }

// function logMessage(log: logLevel): void {
//   switch (log) {
//     case logLevel.INFO:
//       console.log("Server says info");
//       break;
//     case logLevel.WARNING:
//       console.log("Server says warning");
//       break;
//     case logLevel.ERROR:
//       console.log("Server says error.");
//   }
// }

// logMessage(logLevel.ERROR);

// type product = {
//   name: string;
//   price: number;
//   inStock: boolean;
// };

// const product1: product = {
//   name: "A Game Of Thrones",
//   price: 600,
//   inStock: false,
// };
// if (!product1.inStock) console.log("Out of Stock.");

// function greet(name: string | undefined): void {
//   if (typeof name === "string") {
//     console.log(`Good day ${name}!`);
//   } else if (typeof name === "undefined") {
//     console.log("Good day Sir/Ma'm!");
//   }
// }

// greet("Nonso");

// interface Animal {
//   species: string;
//   legs: number;
// }

// function validateAnimal(animal: Animal): void {
//   if (animal.legs > 0) {
//     console.log("Valid animal");
//   } else {
//     console.log(`Invalid animal: ${animal.legs}legs`);
//   }
// }

// const pig: Animal = { species: "mammal", legs: 3 };
// validateAnimal(pig);

// class Rectangle {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   area(): number | string {
//     if (this.width <= 0 && this.height <= 0) {
//       return "invalid dimension";
//     }

//     return this.width * this.height;
//   }
// }

// const exercise = new Rectangle(0, 7).area();
// console.log(exercise);

// interface obj {
//   name: string;
// }
// const data: any = { name: "Alex" } as obj;

// if (typeof data === "object") {
//   console.log(typeof data);
//   console.log(data.name);
// } else {
//   console.log("can't access type");
// }
// type mode = "auto" | "manual" | "off";

// function modeCheck(moder: mode): undefined {
//   switch (moder) {
//     case "auto":
//       console.log("System on AUTO.");
//       break;
//     case "manual":
//       console.log("System on manual");
//       break;
//     case "off":
//       console.log("System is Off");
//   }
// }

// modeCheck("off");

// function wrapvalue<T>(value: T): T[] {
//   return [value];
// }
