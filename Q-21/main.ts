
// QUESTION # 21 They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.*/



// Define an interface named `itCourse` for a book object
interface itCourse {
    courseName: string;            
    location: string;            
    onsiteStudents: number;    
    onlineStudents: number;   
}

// Define an object of type `itCourse` representing a course in IT
let itCourse: itCourse = {
    courseName: "Cloud Applied Generative AI Engineering",  
    location: "Governor Sindh House",                     
    onsiteStudents: 50000,      
    onlineStudents: 500000  
};

// Output the `itCourse` object to the console
console.log(itCourse);

