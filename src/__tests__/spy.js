const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns winner', () => {
    jest.spyOn(utils, 'getWinner');
    utils.getWinner.mockImplementation((p1, p2) => p1);

    const winner = thumbWar('Johnny', 'Joan');

    expect(winner).toBe('Johnny');
    expect(utils.getWinner.mock.calls).toEqual([
        ['Johnny', 'Joan'],
        ['Johnny', 'Joan'],
    ]);

    // clean up
    utils.getWinner.mockRestore();
});
