/*
QUESTION # 43

Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of
the original names and one array with the Great added to each magician’s name.*/
// Define the array of magicians
var magicians1 = [
    { name: "Harry Houdini" },
    { name: "David Copperfield" },
    { name: "Penn Jillette" }
];
// Function to add "the Great" to each magician's name
function make_great(magicians1) {
    magicians1.forEach(function (magician) {
        magician.name = "the Great " + magician.name;
    });
}
// Function to display the magicians' names
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician.name);
    });
}
// Call make_great() to modify the magicians array
make_great(magicians1);
// Call show_magicians() to display the modified list
show_magicians(magicians1);
