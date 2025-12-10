// build in event listner
// const fs = require("fs");
// const path = require("path");

// const myread = fs.createReadStream('./input-for-events.txt', 'utf8');

// myread.on('open', () => {
//     console.log('file opened');
// })




// customized event listner
const event = require('events'); //events module iska istmal kr k  hum event create kr sakte hai
const eventemitter = new event.EventEmitter(); //event emitter create kr deta hai

eventemitter.on('play', (type) => { //event listener create kr deta hai
    console.log('play event emitted', type); //event emit kr deta hai
}) //event listener create kr deta hai
eventemitter.emit('play', 'video'); //event emit kr deta hai




