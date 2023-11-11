// Single responsibility Principle - Each fn or class should have only 1 responsibility

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Order {
  items = [];
  status = "pending";

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item_id) {
    this.items.pop();
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  }
}

class PaymentProcessor {
  payCredit(cardNumber, order) {
    console.log(`Processing the credit payment with card number ${cardNumber}`);
    order.status = "paid";
  }

  payDebit(cardNumber, order) {
    console.log(`Processing the debit payment with card number ${cardNumber}`);
    order.status = "paid";
  }
}

const tomato = new Item("Tomato", 30, 3);
const onion = new Item("Onion", 15, 4);

const order = new Order();
order.addItem(tomato);
order.addItem(onion);

// console.log(order.getTotalPrice());
console.log(order);
console.log("-".repeat(50));

const paymentProcessor = new PaymentProcessor();
paymentProcessor.payDebit("1234 5678 9012 3456", order);
console.log("-".repeat(50));
console.log(order);
