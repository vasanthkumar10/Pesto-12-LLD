// Bank Account

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  checkBalance() {
    return `Current Balance: ${this.balance}`;
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposited ${amount}. ${this.checkBalance()}`;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return `Withdrawn ${amount}. ${this.checkBalance()}`;
    } else {
      return `Trying to withdraw ${amount} but insufficient balance. ${this.checkBalance()}`;
    }
  }
}

const vasanth = new BankAccount(1000);
// console.log(vasanth.checkBalance());
// console.log(vasanth.deposit(100));
// console.log(vasanth.withdraw(2000));

const father = new Proxy(vasanth, {
  get(target, property) {
    if (
      property === "deposit" ||
      property === "checkBalance" ||
      property === "balance"
    )
      return target[property];
    else return "Access Denied";
  },

  set(target, property, newValue) {
    console.log("New Value", newValue);
    if (property === "deposit" || property === "balance") {
      target[property] = newValue;
      return true;
    }
  },
});
// console.log(father);
console.log(father.checkBalance());
father.deposit(100);
console.log(father.checkBalance());
// father.withdraw(200);
