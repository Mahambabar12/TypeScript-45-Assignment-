// Q-11 Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.


let names: string[] = ["Maham", "Maryam", "Hani","Fatima","Roohi"];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//Answer 
// Maham
// Maryam
// Hani
// Fatima
// Roohi

//for each method:

// names.forEach(element => {
//     console.log(element);
// })

//For of loop method:

// for (const element of names) {
//     console.log(element);
    
// }