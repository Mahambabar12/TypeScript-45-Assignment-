/*
QUESTION # 36

T-Shirt:
Write a function called make_shirt()
that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it.
Call the function.*/
function make_shirt(size, label) {
    //we can print in the following ways
    // 1st 
    //return size + label;
    //2nd
    return "My shirt size is ".concat(size, " and label is ").concat(label);
}
var myFun = make_shirt(36, "  The sunny day  ");
//how to print on console
console.log(myFun);
