import TaxItem from "./TaxItem.js";

class Cigar extends TaxItem {
  constructor(description: string, price: number) {
    super("Cigar", description, price);
  }
  getTax(): number {
    return this.price * 0.25;
  }
}

export default Cigar;
