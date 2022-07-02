import Beer from "./Beer.js";
import Cigar from "./Cigar.js";
import Eletronic from "./Eletronic.js";
import Order from "./Order.js";
import Water from "./Water.js";

test("Deve criar um pedido e calcular o total", function () {
  const order = new Order();
  order.addItem(new Beer("Brahma", 6));
  order.addItem(new Cigar("Malboro", 10));
  order.addItem(new Eletronic("IPhone 13", 13000));
  order.addItem(new Water("Crystal", 1));
  const total = order.getTotal();
  expect(total).toBe(13017);
});

test("Deve criar um pedido e calcular os impostos", function () {
  const order = new Order();
  order.addItem(new Beer("Brahma", 6));
  order.addItem(new Cigar("Malboro", 10));
  order.addItem(new Eletronic("IPhone 13", 13000));
  order.addItem(new Water("Crystal", 1));
  const taxes = order.getTaxes();
  expect(taxes).toBe(3903.7);
});

test("Deve criar uma cerveja e calcular o imposto com calculateTax", function () {
  const cigar = new Beer("Crystal", 2);
  const tax = cigar.calculateTax(0.5);
  expect(tax).toBe(1);
});

test("Deve criar um cigarro e calcular seu imposto com getTax", function () {
  const cigar = new Cigar("Crystal", 1);
  const tax = cigar.getTax();
  expect(tax).toBe(0.25);
});
