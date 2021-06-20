var colors = require('colors');

// const text = "Hello my name is Nikolina.";
// const text2 = "How are you?"
// const text3 = "You look beautiful."
// console.log(text.green);

// first example
// console.log(text.rainbow.bold);
// cool !!!
// console.log(text.rainbow.trap);

// second example
// console.log(text.italic); 

// third example
// console.log(text.zebra); 

// fourth example
// console.log(text.bgBrightGreen + " " + text2.brightCyan); 


// fifth example

// console.log(text.brightYellow + " " + text2.random + " " + text3.bgMagenta); 


// var colors = require('colors');
 
// colors.setTheme({
//   silly: 'rainbow',
//   input: 'grey',
//   verbose: 'cyan',
//   prompt: 'grey',
//   info: 'green',
//   data: 'grey',
//   help: 'cyan',
//   warn: 'yellow',
//   debug: 'blue',
//   error: 'red'
// });

// console.log("this is an error".error);
// console.log("this is a warning".warn);
// console.log("this is info".info);
// console.log("this is input".input);
// console.log("this is help".help);

var colors = require('colors');
 
colors.setTheme({
  custom: ['red', 'underline']
});
 
console.log('test'.custom);