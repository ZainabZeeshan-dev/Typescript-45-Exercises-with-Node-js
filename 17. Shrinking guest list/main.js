"use strict";
let guest_list = ['zainab', 'hania', 'rimsha'];
/*for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Miss. ' + guest_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n');
}*/
let absent_Guest = 'zainab';
let new_Guest = 'ahmed';
guest_list[0] = new_Guest;
/*for(let i=0; i<guest_list.length; i++){
    console.log('Dear Miss. ' + guest_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n')
}*/
console.log(` Miss. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find Big Table So we we are inviting 3 more guests.');
guest_list.unshift('Sir Zia Khan');
guest_list.splice(2, 0, 'nabia');
guest_list.push('Ammarah');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Miss. ' + guest_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n');
}
console.log('\nSorry we can not arrange a big table, Only Two peoples will be invited.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop(); // pop :remove persons
    console.log(`Sorry Miss. ${remove_guest}, You are not invited for dinner.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Miss. ' + guest_list[i] + ',\n\n You are still invited.\n\n Thank You!\n\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
