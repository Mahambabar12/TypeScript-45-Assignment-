// Q-16 More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
//  Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list.
//   • Print a new set of invitation messages, one for each person in your list.
var List = ["Maham", "Maryam", "Hani"];
console.log("Great New! We found a bigger table");
//unshift First name
List.unshift("Fatima");
//splice middle name
List.splice(Math.floor(List.length / 2), 0, "Roohi");
//Push Last name
List.push("Javeria");
List.forEach(function (guest) {
    console.log("".concat(guest, ",you all are invited to dinner!"));
});
//Answer
// Great New! We found a bigger table
// Fatima,you all are invited to dinner!
// Maham,you all are invited to dinner!
// Roohi,you all are invited to dinner!
// Maryam,you all are invited to dinner!
// Hani,you all are invited to dinner!
// Javeria,you all are invited to dinner!
