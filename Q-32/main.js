/*
QUESTION # 32

Checking Usernames: Do the following to create a program that simulates
 how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users.
Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has,
print a message that the person will need to enter a new username. If a username has not been used,
print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
var current_user = ["Maham", "Hani", "Fatima", "Esha", "Maheen", "Kiran"];
var new_user = ["Ali", "parisa", "Hina", "usama", "Babar"];
//we will use forEach method
new_user.forEach(function (new_user) {
    var new_userLower = new_user.toLowerCase();
    //we will use some() method
    var userNameTaken = current_user.some(function (current_user) { return current_user.
        toLocaleLowerCase() === new_userLower; }); //true or false
    //new we will apply conditions
    if (userNameTaken) {
        console.log("".concat(new_user, " needs to choose a new username because it's\n        already taken"));
    }
    else {
        console.log("".concat(new_user, " is the new member added"));
        current_user.push(new_user); //add new user to current users array
    }
});
console.log(current_user);
