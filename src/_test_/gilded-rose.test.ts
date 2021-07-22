import { updateQuality } from '../gilded-rose/utils';
import { Item } from '../gilded-rose/Item';

describe('Gilded Rose', function () {
  // - The Quality of an item is never negative
  it('should increase sellIn regardless of the item type except sulfuras', function () {
    let items: Array<Item> = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
    ];
    updateQuality(items);
    expect(items[0].sellIn).toEqual(9);
    expect(items[1].sellIn).toEqual(1);
    expect(items[2].sellIn).toEqual(4);
    expect(items[3].sellIn).toEqual(14);
    expect(items[4].sellIn).toEqual(9);
    expect(items[5].sellIn).toEqual(4);
  });

  it('should prevent going quality to go below 0', function () {
    let items: Array<Item> = [
      new Item('Testing Item1', 12, 0),
      new Item('Testing Item2', 0, 0),
      new Item('Testing Item3', -2, 0),
    ];
    updateQuality(items);
    expect(items[0].quality).toEqual(0);
    expect(items[1].quality).toEqual(0);
    expect(items[2].quality).toEqual(0);
  });
  // Once the sell by date has passed, Quality degrades twice as fast
  it('should lower the quality by 2 when sellIn is passed', function () {
    let items: Array<Item> = [
      new Item('Testing', 0, 5),
      new Item('Testing', -3, 3),
    ];
    updateQuality(items);
    expect(items[0].quality).toEqual(3);
    expect(items[1].quality).toEqual(1);
  });
  // - The Quality of an item is never more than 50
  it('should not increase the value above 50', function () {
    let items: Array<Item> = [
      new Item('Testing', 30, 49),
      new Item('Aged Brie', 0, 50),
    ];
    updateQuality(items);
    expect(items[0].quality).toBeLessThanOrEqual(50);
    expect(items[1].quality).toBeLessThanOrEqual(50);
  });

  describe('Aged Brie', function () {
    // - "Aged Brie" actually increases in Quality the older it gets
    it('should increase the quality of Aged Brie', function () {
      let items: Array<Item> = [
        new Item('Aged Brie', 12, 5),
        new Item('Aged Brie', 0, 5),
        new Item('Aged Brie', -2, 5),
      ];
      updateQuality(items);
      expect(items[0].quality).toBeGreaterThan(5);
      expect(items[1].quality).toBeGreaterThan(5);
      expect(items[2].quality).toBeGreaterThan(5);
    });
  });

  describe('Sulfuras', function () {
    // 	- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
    it('shouldn"t decrease in quality if it is Sulfuras', function () {
      let items: Array<Item> = [new Item('Sulfuras, Hand of Ragnaros', 12, 80)];
      updateQuality(items);
      expect(items[0].quality).toEqual(80);
    });
    it('shouldn"t decrease sellIn Property', function () {
      let items: Array<Item> = [
        new Item('Sulfuras, Hand of Ragnaros', 0, 80),
        new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      ];
      updateQuality(items);
      expect(items[0].sellIn).toEqual(0);
      expect(items[1].sellIn).toEqual(-1);
    });
  });

  describe('Backstage passes to a TAFKAL80ETC concert', function () {
    /* - "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
	Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert */
    it('should increase the quality by 2 when there are 10 days or less', function () {
      let items: Array<Item> = [
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 32),
        new Item('Backstage passes to a TAFKAL80ETC concert', 6, 36),
      ];
      updateQuality(items);
      expect(items[0].quality).toEqual(34);
      expect(items[1].quality).toEqual(38);
    });
    it('should increase the value by 3 when there are 5 days or less', function () {
      let items: Array<Item> = [
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30),
        new Item('Backstage passes to a TAFKAL80ETC concert', 3, 36),
      ];
      updateQuality(items);
      expect(items[0].quality).toEqual(33);
      expect(items[1].quality).toEqual(39);
    });
    it('should set quality to 0 when sellIn is 0', function () {
      let items: Array<Item> = [
        new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30),
      ];
      updateQuality(items);
      expect(items[0].quality).toEqual(0);
    });
  });

  describe('Conjured', function () {
    // 	- "Conjured" items degrade in Quality twice as fast as normal items
    it('should degrade the quality by 2', function () {
      let items: Array<Item> = [new Item('Conjured', 30, 49)];
      updateQuality(items);
      expect(items[0].quality).toEqual(47);
    });
    it('should degrade the quality by 4 when sellIn is less than 0', function () {
      let items: Array<Item> = [new Item('Conjured', -2, 49)];
      updateQuality(items);
      expect(items[0].quality).toEqual(45);
    });
  });

  describe('Overall test', function () {
    it('should test given test cases', function () {
      let items: Array<Item> = [
        new Item('+5 Dexterity Vest', 10, 20),
        new Item('Aged Brie', 2, 0),
        new Item('Elixir of the Mongoose', 5, 7),
        new Item('Sulfuras, Hand of Ragnaros', 0, 80),
        new Item('Sulfuras, Hand of Ragnaros', -1, 80),
        new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
      ];

      updateQuality(items);
      expect(items[0].quality).toEqual(19);
      expect(items[1].quality).toEqual(1);
      expect(items[2].quality).toEqual(6);
      expect(items[3].quality).toEqual(80);
      expect(items[4].quality).toEqual(80);
      expect(items[5].quality).toEqual(21);
      expect(items[6].quality).toEqual(50);
      expect(items[7].quality).toEqual(50);
    });
  });
});
