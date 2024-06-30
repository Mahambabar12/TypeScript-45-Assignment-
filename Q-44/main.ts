/*
QUESTION # 44

Sandwiches: 
Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. Call the function three times, 
using a different number of arguments each time.*/




// Define a function named "makeSandwich" with a rest parameter to accept variable number of items
function makeSandwich(...items: string[]) {
    // Print a message indicating the start of making a sandwich
    console.log("Making a sandwich with the following items:");

    // Using For-Each-Loop to Iterate over each item in the "items" array and print them
    items.forEach(item => console.log("- " + item));
}


// Call the "makeSandwich" function with different numbers of arguments

makeSandwich('chicken', 'cheese', 'butter');             // Making a sandwich with chicken, cheese, and butter

makeSandwich('egg', 'butter', "ketchup", "chicken");   // Making a sandwich with egg, butter, ketchup, and chicken

makeSandwich('peanut butter', 'sauce');              // Making a sandwich with peanut butter and sauce