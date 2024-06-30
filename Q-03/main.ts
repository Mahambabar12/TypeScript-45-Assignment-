// Q-03 Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.

let person = "Maham Babar";
console.log(person.toLowerCase());

let person2 = "Maham Babar";
console.log(person2.toUpperCase());

let person3 = "maham babar";
console.log(person3.charAt(0).toUpperCase()+ person3.slice(1).toLowerCase());

//Answer
// maham babar : LowerCAse
// MAHAM BABAR : UpperCAse
// Maham babar : TitleCasw