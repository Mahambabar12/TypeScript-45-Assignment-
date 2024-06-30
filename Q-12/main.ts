// Q-12 Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them.
//  The text of each message should be the same, but each message should be personalized 
//  with the person’s name.

let greetings:string[] = ["Maham", "Maryam","Hani", "Fatima", "Roohi"];
greetings.forEach(greeting => {
    console.log(`Hello ${greeting}! how are you Today?`);
});

//Answer
// Hello Maham! how are you Today?
// Hello Maryam! how are you Today?
// Hello Hani! how are you Today?
// Hello Fatima! how are you Today?
// Hello Roohi! how are you Today?