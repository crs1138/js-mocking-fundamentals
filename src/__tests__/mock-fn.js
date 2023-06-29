const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns winner', () => {
    const originalGetWinner = utils.getWinner;
    utils.getWinner = jest.fn((p1, p2) => p1);

    const winner = thumbWar('Johnny', 'Joan');
    expect(winner).toBe('Johnny');

    // expect(utils.getWinner).toHaveBeenCalledTimes(2);
    // expect(utils.getWinner).toHaveBeenCalledWith('Johnny', 'Joan');
    // expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Johnny', 'Joan');
    // expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Johnny', 'Joan');
    // console.log(utils.getWinner.mock.calls);
    expect(utils.getWinner.mock.calls).toEqual([
        ['Johnny', 'Joan'],
        ['Johnny', 'Joan'],
    ]);
    // clean up
    utils.getWinner = originalGetWinner;
});
