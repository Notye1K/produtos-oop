import Beer from "./Beer.js";
import Cigar from "./Cigar.js";
import Item from "./Item.js";
import Water from "./Water.js";
import Eletronic from "./Eletronic.js";

type ItemType = Water | Beer | Cigar | Eletronic;

class Order {
  items: ItemType[];
  constructor() {
    this.items = [];
  }

  addItem(item: ItemType) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((total, current) => current.price + total, 0);
  }

  getTaxes() {
    const tax = this.items.reduce((total, current) => {
      if (current instanceof Water) {
        return total;
      } else {
        return total + current.getTax();
      }
    }, 0);
    return tax;
  }
}

export default Order;
