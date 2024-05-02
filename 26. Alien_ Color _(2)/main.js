"use strict";
//  Choose a color for an alien as you did in Exercise 25, 
let alienColors = 'green';
//  write an if-else chain
// IF the aliens color is green
// print a statement that the  player just earned 5 points for shooting the alien
if (alienColors === 'green') {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points foe shooting the alien");
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points
alienColors = 'blue';
if (alienColors === 'green') {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points foe shooting the alien");
}
