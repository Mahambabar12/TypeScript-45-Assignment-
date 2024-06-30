// Q-19 Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner.
//Print message:
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 guest...");
var _Lists = ["Maham", "Maryam", "Hani"];
//unshift First name
_Lists.unshift("Fatima");
//splice middle name
_Lists.splice(Math.floor(_Lists.length / 2), 0, "Roohi");
//Push Last name
_Lists.push("Javeria");
_Lists.forEach(function (guest) {
    console.log("".concat(guest, ",you all are invited to dinner!"));
});
_Lists.unshift("Zawar", "Usama");
//print message updated lists
console.log("updated Lists of guest", _Lists);
//Remove guest from the list
while (_Lists.length > 2) {
    var remove_Guest = _Lists.pop();
    if (remove_Guest !== undefined) {
        console.log("Sorry, ".concat(remove_Guest, ", you can't invite you"));
    }
}
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
_Lists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",  you are invited for the dinner"));
});
//Remove 2 name the from the list
_Lists.splice(0, _Lists.length);
//Print updated list
console.log("Updated List of guest: ".concat(_Lists));
