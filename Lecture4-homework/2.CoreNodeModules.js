/**
 * PATH =>  
 * 1. path.dirname() 
 * 2. path.extname()
 * 3. path.isAbsolute()
 * 4. path.join()
 * 5. path.relative()
 * 
 * This module provides path.sep which provides the path segment separator 
 * (\ on Windows, and / on Linux / macOS), and path.delimiter which provides the path delimiter 
 * (; on Windows, and : on Linux / macOS).
 */
 const path = require('path');


// The path.dirname() method returns the directory name of a path, similar to the Unix dirname command. 
// Trailing directory separators are ignored.
 
// path.dirname('/foo/bar/baz/asdf/quux');
// console.log(path.dirname('/foo/bar/baz/asdf/quux')); 
 
// path.extname()

// path.extname("index.html");
// console.log(path.extname("index.html"));
// console.log(path.extname("example.txt"));


//The path.isAbsolute() method determines if path is an absolute path.
//If the given path is a zero-length string, false will be returned.
 
// path.isAbsolute('//server');
// console.log(path.isAbsolute('//server'));   

//The path.join() method joins all given path segments together using the 
//platform-specific separator as a delimiter, then normalizes the resulting path.
// path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

// path resolve
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
