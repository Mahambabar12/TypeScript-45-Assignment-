// Q-15 Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. 
//  You’ll have to think of someone else to invite.

//Define Array of guest:

let guestLists: string[] = ["Maham" , "Maryam" , "Hani"];

//Print the name who Not invited for dinner 

let unableAttend = guestLists.splice(1,1)[0];

console.log(`${unableAttend} Not invited for dinner`);

//push 

guestLists.push("Fatima");

console.log(guestLists);

//Print message

guestLists.forEach(list => {
    console.log(`Dear ${list} You are invited`);
    
});

//Answer

// Maryam Not invited for dinner
// [ 'Maham', 'Hani', 'Fatima' ]
// Dear Maham You are invited
// Dear Hani You are invited
// Dear Fatima You are invited