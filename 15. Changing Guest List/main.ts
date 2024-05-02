let guest_list :string[] = ['zainab','hania','rimsha'];

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Miss. ' + guest_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n')
}

let absent_Guest :string = 'zainab' ;

let new_Guest :string = 'ahmed' ;
guest_list[0] = new_Guest ;

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Miss. ' + guest_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n')
}

console.log(` Miss. ${absent_Guest} is not coming to the party.`)




