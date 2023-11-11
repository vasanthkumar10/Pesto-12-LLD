// Interface Segregation Principle
// It means instead of having single / general interface,
// have more specific interfaces

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

  pay(order) {
    throw new Error("Pay method is not implemented");
  }
}

class PaymentProcessorWithAuth extends PaymentProcessor {
  authorizePayment(otp) {
    throw new Error("Authorize payment is not implemented");
  }
}

class CreditPaymentProcessor extends PaymentProcessorWithAuth {
  constructor(cardNumber) {
    super();
    this.name = "credit";
    this.cardNumber = cardNumber;
    this.verified = false;
  }

  authorizePayment(otp) {
    console.log(`Authorising the credit payment using SMS otp ${otp}`);
    this.verified = true;
  }

  pay(order) {
    if (!this.verified) throw new Error("Not authorised");
    console.log(
      `Processing the credit payment with card number ${this.cardNumber}`
    );
    order.status = "paid";
  }
}

class DebitPaymentProcessor extends PaymentProcessorWithAuth {
  constructor(cardNumber) {
    super();
    this.name = "debit";
    this.cardNumber = cardNumber;
    this.verified = false;
  }

  authorizePayment(otp) {
    console.log(`Authorising the debit payment using SMS otp ${otp}`);
    this.verified = true;
  }

  pay(order) {
    if (!this.verified) throw new Error("Not authorised");
    console.log(
      `Processing the debit payment with card number ${this.cardNumber}`
    );
    order.status = "paid";
  }
}

class GpayPaymentProcessor extends PaymentProcessor {
  constructor(mobileNumber) {
    super();
    this.mobileNumber = mobileNumber;
  }

  pay(order) {
    console.log(
      `Processing the GPay payment with mobile number ${this.mobileNumber}`
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

const paymentProcessor = new CreditPaymentProcessor("1234 5678 9012 3456");
console.log(paymentProcessor);
// const paymentProcessor = new DebitPaymentProcessor("1234 5678 9012 3456");
// const paymentProcessor = new GpayPaymentProcessor("1234567890");
// paymentProcessor.authorizePayment("1234");

// paymentProcessor.pay(order);
// console.log("-".repeat(50));
// console.log(order);
