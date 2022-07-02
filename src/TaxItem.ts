import Item, { Category } from "./Item.js";

abstract class TaxItem extends Item {
  constructor(category: Category, description: string, price: number) {
    super(category, description, price);
  }
  calculateTax(tax: number) {
    return this.price * tax;
  }
  abstract getTax(): number;
}

export default TaxItem;
