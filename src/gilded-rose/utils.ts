import { Item } from './Item';

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

function increaseQuality(item: Item): void {
  if (item.quality < MAX_QUALITY) {
    item.quality = item.quality + 1;
  }
}

function decreaseQuality(item: Item): void {
  if (item.quality > MIN_QUALITY) {
    item.quality = item.quality - 1;
  }
}

function decreaseSellIn(item: Item): void {
  item.sellIn = item.sellIn - 1;
}
function updateSulfurasQuality(item: Item): void {
  item.quality = 80;
}

function updateAgedBrieQuality(item: Item): void {
  increaseQuality(item);
  decreaseSellIn(item);
  if (item.sellIn < 0) {
    increaseQuality(item);
  }
}

function updateBackstageQuality(item: Item): void {
  increaseQuality(item);
  if (item.sellIn < 11) {
    increaseQuality(item);
  }
  if (item.sellIn < 6) {
    increaseQuality(item);
  }
  decreaseSellIn(item);
  if (item.sellIn < 0) {
    item.quality = item.quality - item.quality;
  }
}
function updateConjuredQuality(item: Item): void {
  decreaseQuality(item);
  decreaseQuality(item);
  decreaseSellIn(item);
  if (item.sellIn < 0) {
    decreaseQuality(item);
    decreaseQuality(item);
  }
}
function updateOrdinaryQuality(item: Item): void {
  decreaseQuality(item);
  decreaseSellIn(item);
  if (item.sellIn < 0) {
    decreaseQuality(item);
  }
}

export function updateQuality(items: Array<Item>): Array<Item> {
  items.forEach((item: Item) => {
    switch (item.name) {
      case 'Sulfuras, Hand of Ragnaros':
        updateSulfurasQuality(item);
        break;
      case 'Backstage passes to a TAFKAL80ETC concert':
        updateBackstageQuality(item);
        break;
      case 'Aged Brie':
        updateAgedBrieQuality(item);
        break;
      case 'Conjured':
        updateConjuredQuality(item);
        break;
      default:
        updateOrdinaryQuality(item);
        break;
    }
  });
  return [...items];
}
