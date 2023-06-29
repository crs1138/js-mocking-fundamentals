const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

// create a mock function that takes an implementation as an argument
// and stores its arguments it has been called with in an array `calls`
function fn(impl) {}

const originalGetWinner = utils.getWinner;
utils.getWinner = fn((p1, p2) => p1);

const winner = thumbWar('Alex', 'Tato');
assert.strictEqual(winner, 'Alex');

// clean up
utils.getWinner = originalGetWinner;
