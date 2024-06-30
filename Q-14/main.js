// Q1-14 Guest List: If you could invite anyone, living or deceased, to dinner,
//  who would you invite? Make a list that includes at least three people 
//  you’d like to invite to dinner. Then use your list to print a message to each person,
//   inviting them to dinner.
//Define Array of guest:
var guestList = ["Maham", "Maryam", "Hani"];
//invite each guest for dinner:
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], " You are invited dinner.."));
}
//Answer
// Dear Maham You are invited dinner..
// Dear Maryam You are invited dinner..
// Dear Hani You are invited dinner..
