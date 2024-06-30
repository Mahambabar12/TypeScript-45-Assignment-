// QUESTION # 22 Intentional Error: If you haven’t received an array 
// index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs 
// to produce an index error.
//  Make sure you correct the error before closing the program.


// Declare an array named `numbers` containing a list of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Error!! Attempting to access an element at an index that doesn't exist in the array
console.log(numbers[10]);

// Correctly access the first element (index 0) of the array
console.log(numbers[0]);