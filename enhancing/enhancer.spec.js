const enhancer = require('./enhancer.js');

describe('enhancing system', () => {
  describe('repair() method', () => {
    it('returns a new item with durability restored to 100', () => {
      const item = {
        name: 'sword',
        durability: 57,
        enhancement: 10
      };

      const repairedItem = enhancer.repair(item);

      expect(repairedItem.durability).toBe(100);
    });
  });
});
