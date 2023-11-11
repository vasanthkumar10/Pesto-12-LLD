// Open closed principle
// It means the class should be open for extension but closed for modification

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

// abstract class
class PaymentProcessor {
  constructor() {
    if (this.constructor === PaymentProcessor) {
      throw new Error("Payment Processor is an abstract class");
    }
  }

  pay(cardNumber, order) {
    throw new Error("Pay method is not implemented");
  }
}

class CreditPaymentProcessor extends PaymentProcessor {
  pay(cardNumber, order) {
    console.log(`Processing the credit payment with card number ${cardNumber}`);
    order.status = "paid";
  }
}

class DebitPaymentProcessor extends PaymentProcessor {
  pay(cardNumber, order) {
    console.log(`Processing the debit payment with card number ${cardNumber}`);
    order.status = "paid";
  }
}

class GpayPaymentProcessor extends PaymentProcessor {
  pay(mobileNumber, order) {
    console.log(
      `Processing the GPay payment with mobile number ${mobileNumber}`
    );
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

// const paymentProcessor = new CreditPaymentProcessor();
// const paymentProcessor = new DebitPaymentProcessor();
const paymentProcessor = new GpayPaymentProcessor();
paymentProcessor.pay("1234 5678 9012 3456", order);
console.log("-".repeat(50));
console.log(order);
