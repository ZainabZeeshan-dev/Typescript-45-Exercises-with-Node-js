"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ['TaHa', 'DaNiyal', 'SalMan', 'HamZah', 'John'];
//  Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ['Bilal', 'TaHa', 'Dawood', 'Jameel', 'HamZah'];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLocaleLowerCase();
    if (current_users.map(current_users => current_users.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available.Please write a different username`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
