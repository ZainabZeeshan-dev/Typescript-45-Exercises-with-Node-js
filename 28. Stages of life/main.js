"use strict";
//  Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 25;
// If the person is less than 2 years old, print a message that the person is a baby
if (age < 2) {
    console.log("Person is a baby ");
    // If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
}
else if (age >= 2 && age < 4) {
    console.log("Person is a toddler");
    //  If the person is at least 4 years old but less than 13, print a message that the person is a kid.
}
else if (age >= 4 && age < 13) {
    console.log("Person is a kid");
    // If the person is at least 20 years old but less than 65, print a message that the person is an adult.
}
else if (age >= 20 && age < 65) {
    console.log("Person is an adult");
}
else {
    console.log("Person is an elder");
}