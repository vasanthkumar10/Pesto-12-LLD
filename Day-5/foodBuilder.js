class FoodOrder {
  constructor(builder) {
    this.menuItems = builder.menuItems;
    this.msg = builder.msg;
    this.deliveryAddress = builder.deliveryAddress;
    this.phoneNo = builder.phoneNo;
    this.cutlery = builder.cutlery;
    this.paymentMethod = builder.paymentMethod;
  }

  display() {
    console.log("Menu Items: ", this.menuItems);
    console.log("Message: ", this.msg);
    console.log("Delivery Address: ", this.deliveryAddress);
    console.log("Phone No: ", this.phoneNo);
    console.log("Cutlery: ", this.cutlery);
    console.log("Payment Method: ", this.paymentMethod);
  }
}

// builder -> creates order
class FoodBuilder {
  constructor() {
    this.menuItems = [];
    this.msg = "";
    this.deliveryAddress = "default address";
    this.phoneNo = "default phone number";
    this.cutlery = false;
    this.paymentMethod = "COD";
  }

  addMenuItem(item) {
    this.menuItems.push(item);
    return this;
  }

  addMsg(msg) {
    this.msg = msg;
    return this;
  }

  addDeliveryAddress(address) {
    this.deliveryAddress = address;
    return this;
  }

  addPhoneNo(phoneNo) {
    this.phoneNo = phoneNo;
    return this;
  }

  enableCutlery(isReq) {
    this.cutlery = isReq;
    return this;
  }

  addPaymentMethod(paymentType) {
    this.paymentMethod = paymentType;
    return this;
  }

  // build
  build() {
    // console.log(this);
    return new FoodOrder(this);
  }
}

const order = new FoodBuilder()
  .addPhoneNo("8998998989")
  .addMenuItem("pizza")
  .addMsg("Add ginger")
  .addMenuItem("Tomato chutney")
  .build();

console.log(order);
