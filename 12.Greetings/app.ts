//Q12. Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let friends: string[] =['zainab','hania','ahmed','rafey','hamza'];
let message: string[] =['Are you going on a picnic:'];
for(let i=0; i<friends.length; i++){
    console.log(message + friends[i]);
}