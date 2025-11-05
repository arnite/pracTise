// Question 1: Basic Types (string, number, boolean)
// -------------------------------------------------
// Declare a variable username of type string, age of type number, and isAdmin of type boolean.
// Then, log them using a template literal in one line.
// Use an if statement to print “Welcome, Admin!” if isAdmin is true.

// Question 2: Arrays and Tuples
// ------------------------------
// Create an array colors that can only contain strings.
// Add three color names to it and print the first one.
// Then, use a for...of loop to print all colors in uppercase.

// Question 3: Enums + Control Flow
// --------------------------------
// Define a numeric enum called Direction with values Up, Down, Left, and Right.
// Write a function move(direction: Direction) that uses a switch statement to log a message depending on the direction chosen.

// Question 4: Type Aliases
// ------------------------
// Create a type alias User with two properties: name (string) and age (number).
// Then, create a variable user1 of type User.
// Use an if...else statement to check if user1.age is above 18 and log “Adult” or “Minor”.

// Question 5: Function Typing + Conditional Logic
// -----------------------------------------------
// Write a function add that takes two numbers and returns their sum.
// Add a check to ensure both inputs are non-negative; if not, return 0.

// Question 6: Interfaces + Type Narrowing
// ---------------------------------------
// Create an interface Car with properties brand (string) and year (number).
// Then, create a function printCar(car: Car | null) that uses a type guard (if car) to safely log its brand.

// Question 7: Classes + Control Flow
// ----------------------------------
// Create a class Person with a constructor that takes name and age.
// Add a method introduce() that returns a string introducing the person.
// Inside introduce(), use an if statement to add “(Adult)” if the person is older than 18.

// Question 8: Objects and Type Assertions
// ---------------------------------------
// Create a variable input of type any with a string value.
// Use a type assertion to treat it as a string and call .toUpperCase().
// Check with typeof before calling the method to ensure it’s safe.

// Question 9: Literal Types + Conditional Display
// -----------------------------------------------
// Define a variable status that can only be "success", "error", or "loading".
// Write a function showStatus(status: "success" | "error" | "loading") that uses if...else to log a message for each case.

// Question 10: Generic Functions + Type Checking
// ----------------------------------------------
// Write a generic function identity<T> that returns whatever value it receives.
// Call it once with a string and once with a number.
// Add runtime typeof checks to log the detected type.

// const username: string = "Arnold"
// const age: number = 24
// const isAdmin: boolean = true

// if (isAdmin) {
//      console.log(`Welcome Admin`)
// } else {
//     console.log(`Welcome ${username}`)
// }

// const colors: string[] = ["ORANGE", "red", "PURPLE"]
// console.log(colors[0])

// for (let color of colors) {
//     console.log(color.toUpperCase())
// }

// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// function move(direction: Direction): void {
//     switch (direction) {
//         case Direction.Up:
//             console.log("Moving Up")
//             break;
//         case Direction.Down:
//             console.log("Moving Down")
//             break;
//         case Direction.Left:
//             console.log("Moving Left")
//             break;
//         case Direction.Right:
//             console.log("Moving Right")
//             break;
//     }
// }

// move(Direction.Right)

// type User = {name: string, age: number}

// const user1: User = {name: "Arnold", age: 5}

// if (user1.age >= 18) {
//     console.log("Adult")
// } else {
//     console.log("Minor")
// }

// function add(a: number, b: number): number {
//     if (a < 0 && b < 0) {
//         return 0;
//     }

//     return a + b;
// }

// console.log(add(0, 0))
// interface Car {
//     Brand: string,
//     Year: number,
// }

// function printCar(car: Car | null): void {
//     if (typeof car === "Car") {
//          console.log(car!.Brand)
//     } else {
//         console.log("empty")
//     }
// }

// const car: Car = {Brand: "Toyota", Year: 2023}
// printCar(car)

// class Person {
//     name: string
//     age: number

//     constructor (name: string, age: number) {
//         this.name = name;
//         this.age = age
//     }

//     introduce(): string {
//         return `Welcome ${this.name}`
//     }
// }

// const arnold = new Person("arnold", 24).introduce()
// console.log(arnold)

// const input: any = "nneoma"
// let upper = (input as string)

// if (typeof upper === "string") {
//     upper = upper.toUpperCase();
// }

// console.log(upper)

// type Status = "success" | "error" | "loading"

// let status: Status = "success"

// function showStatus(status: Status): void {
//     if (status === "success") {
//         console.log("Operational")
//     } else if (status === "error") {
//         console.log("There has been an error")
//     } else if (status === "loading") {
//         console.log("Processing...")
//     }
// }

// showStatus(status)

function identity<T>(value: T): T {
  console.log("It is working");
  return value;
}

identity([{ name: "arnold" }, { name: "nonso" }]);
