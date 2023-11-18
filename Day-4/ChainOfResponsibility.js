// class PurchaseRequest {
//   constructor(amount) {
//     this.amount = amount;
//   }
// }

// class Manager {
//   constructor() {
//     this.approvalLimit = 5000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved the purchase request - ${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve - ${request.amount}`
//       );
//     }
//   }
// }

// class Director {
//   constructor() {
//     this.approvalLimit = 50000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved the purchase request - ${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve - ${request.amount}`
//       );
//     }
//   }
// }

// class VP {
//   constructor() {
//     this.approvalLimit = 500000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved the purchase request - ${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve - ${request.amount}`
//       );
//     }
//   }
// }

// class CEO {
//   constructor() {
//     this.approvalLimit = 5000000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved the purchase request - ${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve - ${request.amount}. I'll get approval from Board Members`
//       );
//     }
//   }
// }

// const request = new PurchaseRequest(3000000000000);

// // people
// const manager = new Manager();
// const director = new Director();
// const vp = new VP();
// const ceo = new CEO();

// manager.processRequest(request);
// director.processRequest(request);
// vp.processRequest(request);
// ceo.processRequest(request);

// CHAIN OF RESPONSIBILITY
class Approver {
  constructor(approvalLimit) {
    this.approvalLimit = approvalLimit;
    this.boss = null;
    this.availability = true;
  }

  setBoss(boss) {
    this.boss = boss;
  }

  processRequest(request) {
    if (!this.availability && this.boss) {
      this.boss.processRequest(request);
      return;
    }

    if (request.amount <= this.approvalLimit) {
      console.log(
        `${this.constructor.name} approved the purchase request - ${request.amount}`
      );
    } else if (this.boss) {
      this.boss.processRequest(request);
    } else {
      console.log(`Need to get approval from Board Members`);
    }
  }
}

class PurchaseRequest {
  constructor(amount) {
    this.amount = amount;
  }
}

class Manager extends Approver {
  constructor() {
    super(5000); // 5000 - approval limit
  }
}

class Director extends Approver {
  constructor() {
    super(50000); // 50000 - approval limit
  }
}

class VP extends Approver {
  constructor() {
    super(500000); // 500000 - approval limit
  }
}

class CEO extends Approver {
  constructor() {
    super(5000000); // 5000000 - approval limit
  }
}

const request = new PurchaseRequest(30000);

// people
const manager = new Manager();
const director = new Director();
const vp = new VP();
const ceo = new CEO();

manager.setBoss(director);
director.setBoss(vp);
vp.setBoss(ceo);

director.availability = false;
vp.availability = false;

manager.processRequest(request);
