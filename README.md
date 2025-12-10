# Node.js Tutorials

This repository contains a collection of Node.js examples and tutorials, covering everything from basic concepts to advanced topics. It's designed as a zero-to-master guide for learning Node.js, with hands-on code snippets and explanations.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Node.js Basics](#node-js-basics)
- [Asynchronous Programming](#asynchronous-programming)
- [Promises and Async/Await](#promises-and-asyncawait)
- [Events](#events)
- [File System Operations](#file-system-operations)
- [Building APIs](#building-apis)
- [Express.js Basics](#expressjs-basics)
- [Advanced Topics](#advanced-topics)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side, enabling full-stack development with a single language. This repo includes practical examples to help you master Node.js from scratch.

Repository: [https://github.com/KahafSameer/nodejs-tutorials](https://github.com/KahafSameer/nodejs-tutorials)

## Installation
1. Ensure you have Node.js installed. Download from [nodejs.org](https://nodejs.org/).
2. Clone this repository:
   ```bash
   git clone https://github.com/KahafSameer/nodejs-tutorials.git
   cd nodejs-tutorials
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
Run individual examples using Node.js:
```bash
node index.js
node asynchronous.js
node promises.js
# etc.
```

For development with auto-restart:
```bash
npx nodemon <filename>.js
```

## Node.js Basics
Node.js uses an event-driven, non-blocking I/O model. Start with creating a simple HTTP server.

### Basic HTTP Server
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```
*(From index.js)*

### Routing in HTTP Server
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Page</h1>');
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ name: 'John', age: 30 }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```
*(From basicAPI.js)*

## Asynchronous Programming
Node.js excels in asynchronous operations. Synchronous code blocks execution, while asynchronous allows concurrent tasks.

### Synchronous vs Asynchronous
```javascript
// Synchronous
console.log("a");
console.log("b");
console.log("c");

// Asynchronous
let firstname = "Kahaf";
let lastname = "Sameer";
setTimeout(() => {
    lastname = "Bilal";
}, 2000);
console.log(firstname + " " + lastname); // May print "Kahaf Sameer" before timeout
```
*(From asynchronous.js)*

Drawbacks: Can lead to callback hell; use promises or async/await.

## Promises and Async/Await
Promises handle asynchronous operations with states: pending, fulfilled, rejected.

### Basic Promise
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            reject(new Error('Random number is less than 0.5'));
        }
    }, 1000);
});

promise.then((result) => {
    console.log('Promise resolved with result:', result);
}).catch((error) => {
    console.log('Promise rejected with error:', error.message);
}).finally(() => {
    console.log('Promise settled');
});
```

### Promise Chaining
```javascript
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
});

const promise2 = promise1.then((result) => {
    console.log(result);
    return 'Promise 2 resolved';
});

promise2.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log('Error:', error.message);
});
```

### Promise.all and Promise.race
- **Promise.all**: Resolves when all promises resolve.
- **Promise.race**: Resolves/rejects as soon as one does.

### Async/Await
Syntactic sugar over promises.
```javascript
async function asyncFunction() {
    try {
        const result = await promise;
        console.log('Async function result:', result);
    } catch (error) {
        console.log('Async function error:', error.message);
    } finally {
        console.log('Async function finished');
    }
}

asyncFunction();
```
*(From promises.js)*

## Events
Node.js uses an event-driven architecture. The `events` module allows creating custom events.

### Built-in Events
```javascript
const fs = require("fs");

const myread = fs.createReadStream('./input-for-events.txt', 'utf8');

myread.on('open', () => {
    console.log('file opened');
});
```

### Custom Events
```javascript
const event = require('events');
const eventemitter = new event.EventEmitter();

eventemitter.on('play', (type) => {
    console.log('play event emitted', type);
});

eventemitter.emit('play', 'video');
```
*(From events.js)*

## File System Operations
Use the `fs` module for CRUD operations on files.

### CRUD with fs
```javascript
const fs = require('fs');

// Create
fs.writeFile('example.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('File created!');
});

// Read
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});

// Update (Append)
fs.appendFile('example.txt', '\nAppended text', (err) => {
  if (err) throw err;
  console.log('File updated!');
});

// Delete
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});
```
*(From crud-fs.js)*

## Building APIs
APIs in Node.js can be built using the core `http` module or frameworks like Express.

*(See basicAPI.js for routing example)*

## Express.js Basics
Express is a minimal web framework for Node.js.

### Basic Express App
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
*(From expresssnotes/app.js)*

## Advanced Topics
- **Streams and Buffers**: Handle large data efficiently.
- **Error Handling**: Use try-catch, global error handlers.
- **Modules**: CommonJS vs ES6 modules.
- **NPM and Package Management**: Publishing packages, scripts.
- **Testing**: Use Mocha, Jest for unit tests.
- **Security**: Input validation, authentication (e.g., JWT).
- **Deployment**: Heroku, AWS, Docker.
- **Databases**: MongoDB with Mongoose, SQL with Sequelize.
- **Real-time Apps**: WebSockets with Socket.io.
- **Microservices**: Clustering, PM2 for process management.
- **Performance**: Profiling, caching with Redis.

Explore these in your projects for mastery.

## Contributing
Feel free to fork, add examples, and submit pull requests. Ensure code is well-commented.

## License
ISC License - See package.json for details.
