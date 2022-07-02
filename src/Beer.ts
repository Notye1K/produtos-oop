import TaxItem from "./TaxItem.js";

class Beer extends TaxItem {
  constructor(description: string, price: number) {
    super("Beer", description, price);
  }
  getTax() {
    return this.price * 0.2;
  }
}

export default Beer;
