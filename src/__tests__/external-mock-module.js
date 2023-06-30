const thumbWar = require('../thumb-war');
const utils = require('../utils');

jest.mock('../utils');

test('returns winner', () => {
    const winner = thumbWar('Johnny', 'Joan');

    expect(winner).toBe('Johnny');
    expect(utils.getWinner.mock.calls).toEqual([
        ['Johnny', 'Joan'],
        ['Johnny', 'Joan'],
    ]);

    // clean up
    utils.getWinner.mockReset();
});
