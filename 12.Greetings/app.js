//Q12. Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friends = ['zainab', 'hania', 'ahmed', 'rafey', 'hamza'];
var message = ['Are you going on a picnic:'];
for (var i = 0; i < friends.length; i++) {
    console.log(message + friends[i]);
}
