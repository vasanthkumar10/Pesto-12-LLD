// cart
// amount, food, address, phone no, msg, payment method, cutlery

// class FoodOrder {
//   constructor() {
//     this.menuItems = menuItems;
//     this.msg = "" || msg;
//     this.deliveryAddress = deliveryAddress;
//     this.phoneNo = phoneNo;
//     this.cutlery = cutlery;
//     this.paymentMethod = paymentMethod;
//   }

//   display() {
//     console.log("Menu Items: ", this.menuItems);
//     console.log("Message: ", this.msg);
//     console.log("Delivery Address: ", this.deliveryAddress);
//     console.log("Phone No: ", this.phoneNo);
//     console.log("Cutlery: ", this.cutlery);
//     console.log("Payment Method: ", this.paymentMethod);
//   }
// }

// // order
// const order = new FoodOrder(
//   ["Briyani", "Pizza"],
//   "Add more panneer",
//   "chennai",
//   "9012345678",
//   false,
//   "GPAY"
// );

// order.display();
// console.log("=".repeat(60));

// const order2 = new FoodOrder(["idli"], "", "", 378978929832, false, "PhonePay");
// order2.display();

// class FoodOrder {
//   constructor(data) {
//     this.menuItems = [];
//     this.msg = "";
//     this.deliveryAddress = "default address";
//     this.phoneNo = "default phone no";
//     this.cutlery = false;
//     this.paymentMethod = "COD";

//     const dataItems = { ...this, ...data };
//     console.log(dataItems);
//   }

//   display() {
//     console.log("Menu Items: ", this.menuItems);
//     console.log("Message: ", this.msg);
//     console.log("Delivery Address: ", this.deliveryAddress);
//     console.log("Phone No: ", this.phoneNo);
//     console.log("Cutlery: ", this.cutlery);
//     console.log("Payment Method: ", this.paymentMethod);
//   }
// }

// const order = new FoodOrder({ msg: "good food" });
// console.log(order);

// const data = { ph: 909 };
// const newData = { ph: 809, address: "chennai" };
// console.log({ ...data, ...newData });
