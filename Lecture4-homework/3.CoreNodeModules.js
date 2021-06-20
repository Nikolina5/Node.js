/**
 *  EVENTS =>
 *  1. EventEmitter
 *  2. 'newListener'
 *  3. emitter.eventNames()
 *  4. emitter.once(eventName, listener)
 *  5. emitter.prependOnceListener()
 * 
*/


const EventEmitter = require('events')

// const door = new EventEmitter()
// console.log(door);


// EVENT.NEW.LISTENER
// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.once('newListener', (event, listener) => {
//   if (event === 'event') {

//     myEmitter.on('event', () => {
//       console.log('B');
//     });
//   }
// });
// myEmitter.on('event', () => {
//   console.log('A');
// });
// myEmitter.emit('event');


// emitter.eventNames()

// const EventEmitter = require('events');
// const myEE = new EventEmitter();
// myEE.on('foo', () => {});
// myEE.on('bar', () => {});

// const sym = Symbol('symbol');
// myEE.on(sym, () => {});

// console.log(myEE.eventNames());



// Adds a one-time listener function for the event named eventName. The next time eventName is triggered,
// this listener is removed and then invoked.



//myEE.prependOnceListener

const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
