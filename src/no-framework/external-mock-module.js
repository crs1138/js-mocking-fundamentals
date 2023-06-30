require('../__no-framework-mocks__/utils');
const utilsPath = require.resolve('../utils');
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils');
require.cache[utilsPath] = require.cache[mockUtilsPath];

const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const winner = thumbWar('Alex', 'Tato');
assert.strictEqual(winner, 'Alex');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
    ['Alex', 'Tato'],
    ['Alex', 'Tato'],
]);

// cleanup
delete require.cache[utilsPath];
