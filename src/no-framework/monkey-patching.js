const assert = require("assert");
const thumbWar = require("../thumb-war");

const winner = thumbWar("Alex", "Tato");
assert.strictEqual(winner, "Alex");
