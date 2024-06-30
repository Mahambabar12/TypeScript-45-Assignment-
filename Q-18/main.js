// Q-18 
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order.
//  Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order.
//  Print the list to show that its order has changed.
var places = ["Canada", "Turki", "China", "France", "German"];
// print in original order 
console.log("Original order:", places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Alphabetical order", places.slice().sort());
//Show that your array is still in its original order by printing it.
console.log("Original order:", places);
//Print array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order:", places.slice().sort().reverse());
//array is still in its original order by printing it again
console.log("Original order:", places);
//Reverse the order of your list. Print the array to show that its order has changed
console.log("Reverse order Changed:");
places.reverse();
console.log(places);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original order:", places.sort());
console.log(places);
//Sort  array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Reverse Alphabetical Order Changed:", places.sort().reverse());
console.log(places);
