import TaxItem from "./TaxItem.js";

class Eletronic extends TaxItem {
  constructor(description: string, price: number) {
    super("Eletronics", description, price);
  }
  getTax(): number {
    return this.price * 0.3;
  }
}

export default Eletronic;
