const assert = require('assert');
const greetings = require('./hello.js');

assert.strictEqual(greetings.sayHelloInEnglish(), 'HELLO', 'our "Hello" function works');
