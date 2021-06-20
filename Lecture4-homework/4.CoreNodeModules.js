/**
 *  BUFFER  =>
 *  1. arrayBuffer 
 *  2. alloc
 *  3. Buffer.isEncodings 
 *  4. Buffer.from(new String('')) 
 *  5. buffer from numbers
 * 
*/

/**
 * The optional byteOffset and length arguments specify a memory 
 * range within the arrayBuffer that will be shared by the Buffer.
//  */
// const ab = new ArrayBuffer(10);
// const buf = Buffer.from(ab, 0, 2);

// console.log(buf.length);


//allocated
//  const buf = Buffer.alloc(5);
//  console.log(buf);

// this is ---> Buffer.isEncoding --> for coding 
//  const buf = Buffer.isEncoding('utf8');
//  console.log(buf);


//buffer.from(new String (''));
// const buf = Buffer.from(new String('this is a test'));
// console.log(buf);


// buffer from numbers
// const buf5 = Buffer.from([257, 257.5, -255, '1']);
// console.log(buf5);
