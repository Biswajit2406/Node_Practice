const EventEmitter = require('events'); //Importing the event module

class MyEmitter extends EventEmitter {} //Inheritance

const myEmitter = new MyEmitter();  //Creating an object
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');