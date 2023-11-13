const { generateId } = require("./utils");
const { FIFO, LIFO, RANDOM } = require("./Strategy");

class SupportTicket {
  constructor(customer, issue) {
    this.id = generateId();
    this.customer = customer;
    this.issue = issue;
  }
}

class CustomerSupport {
  constructor() {
    this.tickets = [];
  }

  create(customer, issue) {
    const ticket = new SupportTicket(customer, issue);
    this.tickets.push(ticket);
  }

  process(ticket) {
    console.log(
      `Processing the ticket ${ticket.id} from ${ticket.customer} about an issue ${ticket.issue}`
    );
  }

  processTickets(strategy) {
    // strategy pattern
    const tickets = strategy.orderTickets(this.tickets);
    tickets.forEach((ticket) => {
      this.process(ticket);
    });
    //     if (strategy === "FIFO") {
    //       this.tickets.forEach((ticket) => this.process(ticket));
    //     } else if (strategy === "LIFO") {
    //       this.tickets.reverse().forEach((ticket) => this.process(ticket));
    //     } else if (strategy === "RANDOM") {
    //       const shuffledTickets = this.tickets.sort(() => Math.random() - 0.5);
    //       shuffledTickets.forEach((ticket) => this.process(ticket));
    //     }
  }
}

const CRM = new CustomerSupport();
CRM.create("Vasanth", "My food is not delivered yet");
CRM.create("Dhoni", "My food is missing.");
CRM.create("ABD", "My food quantity is very less.");

// console.log(CRM);
CRM.processTickets(FIFO);
console.log("=".repeat(100));
CRM.processTickets(LIFO);
console.log("=".repeat(100));
CRM.processTickets(RANDOM);
