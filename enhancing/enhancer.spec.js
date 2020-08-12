const enhancer = require('./enhancer.js');

let item = {};

describe('enhancing system', () => {
  beforeEach(() => {
    item = {
      name: 'sword',
      durability: 57,
      enhancement: 10
    };
  });

  describe('repair() method', () => {
    it('returns a new item with durability restored to 100', () => {
      const repairedItem = enhancer.repair(item);

      expect(repairedItem.durability).toBe(100);
    });
  });

  describe('success() method', () => {
    let enhancedItem = {};

    beforeEach(() => {
      enhancedItem = enhancer.success(item);
    });

    it('if item enhancement is less than 20, returns a new item with enhancement increased by 1', () => {
      expect(enhancedItem.enhancement).toBe(11);
    });
    it('if item enhancement is 20, returns a new item with enhancement unchanged', () => {
      item.enhancement = 20;
      enhancedItem = enhancer.success(item);

      expect(enhancedItem.enhancement).toBe(20);
    });
    it('durability of item is unchanged', () => {
      expect(enhancedItem.durability).toBe(57);
    });
  });

  describe('fail() method', () => {
    it('if item enhancement is less than 15, returns a new item with durability decreased by 5', () => {
      const diminishedItem = enhancer.fail(item);

      expect(diminishedItem.durability).toBe(52);
    });
    it('if item enhancement is 15 or more, returns a new item with durability decreased by 10', () => {
      item.enhancement = 15;
      diminishedItem = enhancer.fail(item);

      expect(diminishedItem.durability).toBe(47);
    });
    it('if item enhancement is 17 or more, returns a new item with enhancement decreased by 1', () => {
      item.enhancement = 17;
      diminishedItem = enhancer.fail(item);

      expect(diminishedItem.enhancement).toBe(16);
    });
    it('if item enhancement is less than 17, returns a new item with enhancement unchanged', () => {
      diminishedItem = enhancer.fail(item);

      expect(diminishedItem.enhancement).toBe(item.enhancement);
    });
    it('does not decrease durability below 0', () => {
      item.durability = 4;
      diminishedItem = enhancer.fail(item);

      expect(diminishedItem.durability).toBeGreaterThanOrEqual(0);
    });
  });
});
