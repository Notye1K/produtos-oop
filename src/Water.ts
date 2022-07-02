import Item from "./Item.js";

class Water extends Item {
  constructor(description: string, price: number) {
    super("Water", description, price);
  }
}

export default Water;
