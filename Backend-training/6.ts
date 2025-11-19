// Question 1: Interfaces + Functions + Conditional
// ------------------------------------------------
// Define an interface Person with name (string) and age (number).
// Write a function printPerson that takes a Person object and logs "Name: <name>, Age: <age>".
// If age is greater than 60, also log "Senior Citizen".
// Call the function with a valid Person object.

// Question 2: Enums + Objects + Conditional Logic
// -----------------------------------------------
// Create an enum Role with values ADMIN, USER, and GUEST.
// Then, define an object currentUser with name (string) and role (Role).
// Write a conditional statement that prints:
// - "Welcome, Admin!" if role is ADMIN
// - "User Dashboard" if USER
// - "Guest Access Only" if GUEST

// Question 3: Type Aliases + Union Types + typeof Narrowing
// ----------------------------------------------------------
// Create a type alias ID that can be a number or string.
// Write a function displayID that accepts an ID and logs whether it’s a string or number using typeof.
// If it’s a string, log it in uppercase.

// Question 4: Arrays + Generics + Loop
// ------------------------------------
// Write a generic function getFirst<T>(arr: T[]): T that returns the first element of an array.
// After returning the first element, loop through all items and log each one.

// Question 5: Classes + Interfaces + Conditional Method
// -----------------------------------------------------
// Define an interface Shape with a method area(): number.
// Create a class Circle that implements Shape and has a radius property.
// Implement area() to return the circle’s area.
// If radius <= 0, log "Invalid radius" before returning.

// Question 6: Function Overloading + typeof Check
// -----------------------------------------------
// Create a function formatInput that:
// - Takes a single number and returns it as a string with a "$" prefix.
// - Takes a single string and returns it uppercased.
// Inside the function, use typeof to determine the type at runtime.

// Question 7: Type Guards + Union Types + Branching
// -------------------------------------------------
// Create two types:
// - Fish { swim: () => void }
// - Bird { fly: () => void }
// Write a function move that accepts Fish | Bird.
// Use an if statement with the in operator to call the correct method.

// Question 8: Index Signatures + Loops
// ------------------------------------
// Define an interface Dictionary where keys are strings and values are numbers.
// Create an object prices that follows this interface and add three key-value pairs.
// Use a for...in loop to print each key and value.

// Question 9: Optional Properties + Classes + Conditional Display
// ---------------------------------------------------------------
// Create a class Book with title (string) and author? (optional string).
// In the constructor, allow author to be optional.
// Write a method describe() that logs the title and author (if present) using an if statement.

// Question 10: Promises + Async/Await + Control Flow
// --------------------------------------------------
// Write an async function fetchUser that returns a Promise<string>.
// Inside it, wait for 2 seconds using setTimeout and then resolve with "User loaded".
// Use try/catch to handle and log any errors when calling it.

// interface Person {
//     name: string,
//     age: number
// }

// function printPerson(citizen: Person): string{
//     if (citizen.age > 60) console.log("Senior citizen")
//     return `Name: ${citizen.name}, Age: ${citizen.age}`
// }

// const citizen: Person = {name: "Ogechukwu", age: 76}
// const results = printPerson(citizen);
// console.log(results)

// enum Role {
//   ADMIN = "admin",
//   USER = "user",
//   GUEST = "guest",
// }

// interface User {
//   name: string;
//   role: string;
// }

// const currentUser = { name: "Arnold", role: "user" };

// function authorization(user: User) {
//   switch (user.role) {
//     case Role.ADMIN:
//       console.log("Welcome, Admin!");
//       break;
//     case Role.USER:
//       console.log("User Dashboard");
//       break;
//     case Role.GUEST:
//       console.log("Guest Access Only");
//   }
// }
// authorization(currentUser);

// type Alias = number | string;

// function idChecker(id: Alias): void {
//   if (typeof id === "number") {
//     console.log("Your ID is a NUMBER");
//   } else {
//     console.log("Your ID is a STRING");
//   }
// }

// idChecker("675");

// function getfirst<T>(arr: T[]): T {
//   console.log(typeof arr[0]);
//   return arr[0]!;
// }

// const array = [5, 4, 2, 6, 7, 8];
// console.log(getfirst(array));

// for (let a of array) {
//   console.log(a);
// }

// interface Shape {
//   area(): number;
// }

// class Circle implements Shape {
//   radius = 0;
//   area(): number {
//     if (this.radius <= 0) console.log("invalid radius");
//     return this.radius * 5;
//   }
// }

// const shape1 = new Circle();
// const area = shape1.area();
// console.log(area);

function formatInput(input: string | number) {
  if (typeof input === "number") {
    console.log(`$${input}`);
  } else {
    const upperInput = input.toUpperCase();
    console.log(upperInput);
  }
}

formatInput(24);
