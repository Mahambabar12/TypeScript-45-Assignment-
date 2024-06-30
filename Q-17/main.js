// Q-17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise
//  16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list,
//   print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.
//Print message:
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 guest...");
var Lists = ["Maham", "Maryam", "Hani"];
//unshift First name
Lists.unshift("Fatima");
//splice middle name
Lists.splice(Math.floor(Lists.length / 2), 0, "Roohi");
//Push Last name
Lists.push("Javeria");
Lists.forEach(function (guest) {
    console.log("".concat(guest, ",you all are invited to dinner!"));
});
Lists.unshift("Zawar", "Usama");
//print message updated lists
console.log("updated Lists of guest", Lists);
//Remove guest from the list
while (Lists.length > 2) {
    var remove_Guest = Lists.pop();
    if (remove_Guest !== undefined) {
        console.log("Sorry, ".concat(remove_Guest, ", you can't invite you"));
    }
}
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
Lists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",  you are invited for the dinner"));
});
//Remove 2 name the from the list
Lists.splice(0, Lists.length);
//Print updated list
console.log("Updated List of guest: ".concat(Lists));
