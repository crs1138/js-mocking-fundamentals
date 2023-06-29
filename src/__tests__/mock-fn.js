const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns winner', () => {
    const originalGetWinner = utils.getWinner;
    utils.getWinner = jest.fn((p1, p2) => p1);

    const winner = thumbWar('Johnny', 'Joan');
    expect(winner).toBe('Johnny');

    // clean up
    utils.getWinner = originalGetWinner;
});
