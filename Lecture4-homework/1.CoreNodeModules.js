/**
 * fs => FILE SYSTEM
 * 
 * 1. readFile;
 * 2. writeFile;
 * 3. appendFile
 * 4. watchFile
 * 5. open
 * 
 */


const fs = require('fs');


// fs.readFile("example.txt", "utf8", (err, data) => {
//     console.log(data);
// });

//over write brise vnatre a zapisuva novo vneseno

// const h = "hello to EVEROYINE !!";

// fs.writeFile("example.txt", h, "utf8", (err, data) => {
//     console.log("New example of writing in the document");
// });

// ova dodava
// const h = " hello world with NODE JS";

// fs.appendFile("example.txt", h, ()=> {
//     console.log("Add this in my first file");
// });



// With this i see what i have in my file   .watchFile;

// fs.watchFile("example.txt"); 
// const h = "hello to EVEROYINE !!";

// fs.watchFile("example.txt", h, "utf8", (err, data) => {
//     console.log("New example of writing in the document");
// });

// fs.watchFile('example.txt', (curr, prev) => {
//     console.log(`the current mtime is: ${curr.mtime}`);
//     console.log(`the previous mtime was: ${prev.mtime}`);
//   });
  

const h = " More text in the file";

fs.open("example.txt", h, ()=> {
    console.log("Add this in my first file");
});
