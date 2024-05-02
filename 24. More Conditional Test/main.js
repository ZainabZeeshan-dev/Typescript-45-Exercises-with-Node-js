"use strict";
// Equality and Inequality test 1:
console.log("Equality test with strings: ", "Apple" === "Apple");
// Equality and Inequality test 2:
console.log("Equality test with strings: ", "Apple" != "Orange");
// Tests using the lower case function
console.log("Lower case function test: ", "Hello".toLowerCase() === "hello");
//Numerical tests involving equality 
console.log("Equality test with numbers: ", 26 === 26);
//Numerical tests involving inequality 
console.log("Inequality test with numbers: ", 26 != 26);
// greater than test
console.log("Greater than test:", 10 > 5);
// less than test
console.log("Greater than test:", 5 < 10);
/// greater than or equal to, and less than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
// less than and equal to 
console.log("Less than and equal to test : ", 5 <= 10);
//Tests using "and" and "or" operators
// && operator means dono conditions true honi chaiye agr ik bhi glt hogi to uska jawab true nhi ayega.
console.log("And operator test: ", 5 === 5 && 10 > 5);
//Tests using "or" operators
console.log("And operator test: ", 5 === 5 || false);
// Test whether an item is in a array
const fruits = ['Apple', 'Bnanna', 'Orange'];
console.log('Test "Orange" in the array: ', fruits.includes("Orange"));
// Test whether an item is not in a array
console.log('Testing "Grapes" is not an array: ', !fruits.includes("Grapes"));
