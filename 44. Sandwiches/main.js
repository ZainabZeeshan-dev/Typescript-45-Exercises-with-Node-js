"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makesandwhich(item) {
    console.log('Making your sandwhich with:');
    item.forEach(element => console.log("-" + element));
    console.log('Enjoy your sandwich !');
}
makesandwhich(['Ham', 'Cheese', 'lettuce']);
makesandwhich(['Turkey', 'Bacon']);
makesandwhich(['Peanut butter', 'Jelly']);
