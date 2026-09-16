
// Declare a variable
let age = 25;


// like print in Python
console.log(age);

// A constant variable
const name = "Brother Warner";

// Rewrite a variable
age = 22
console.log(age);

// This won't work
// name = "Dr. Java";

// read only, no other file could change this variable
const username = "billybob"

// Scope = Where you can reference a variable by name

if(age == 22) {
    // a new scope 
    // You can always access anything declared outside the scope within this scope, but you 
    // can't access anything outside that was declared inside the scope
    console.log(username);
    let favoriteColor = "blue";
    let name = "Dr. Java" // this variable is now referenced in this scope and any scope inside it
    console.log(name) 
    age  = 26;
}

let favoriteColor = "Blue" //Name reuse
console.log(favoriteColor)
console.log(age)

// grab our H1 from the DOM file and color it blue with css
document.querySelector("h1").style.color = "blue"
