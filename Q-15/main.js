// Q-15 Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. 
//  You’ll have to think of someone else to invite.
//Define Array of guest:
var guestLists = ["Maham", "Maryam", "Hani"];
//Print the name who Not invited for dinner 
var unableAttend = guestLists.splice(1, 1)[0];
console.log("".concat(unableAttend, " Not invited for dinner"));
//push 
guestLists.push("Fatima");
console.log(guestLists);
//Print message
guestLists.forEach(function (list) {
    console.log("Dear ".concat(list, " You are invited"));
});
