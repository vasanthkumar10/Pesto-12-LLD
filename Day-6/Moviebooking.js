class Seat {
  constructor(name) {
    this.name = name;
    this.isBooked = false;
  }

  book() {
    this.isBooked = true;
  }

  unbook() {
    this.isBooked = false;
  }
}

class Screen {
  constructor(screenNumber, rows, cols) {
    this.screenNumber = screenNumber;
    this.seats = this.generateSeats(rows, cols);
  }

  generateSeats(rows, cols) {
    const seats = [];
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        const newSeat = new Seat(`${String.fromCharCode(64 + i)}${j}`);
        seats.push(newSeat);
      }
    }
    return seats;
  }

  getAvailableSeats() {
    return this.seats.filter((seat) => !seat.isBooked);
  }

  getOverlappingSeats(seatNames) {
    const overlappingSeats = [];
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat && seat.isBooked) {
        overlappingSeats.push(seat);
      }
    }
    return overlappingSeats;
  }

  bookSeats(seatNames) {
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat) seat.book();
    }
  }

  releaseSeats(seatNames) {
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat) seat.unbook();
    }
  }
}

class Show {
  constructor(movie, startTime, duration, screen) {
    this.movie = movie;
    this.startTime = startTime;
    this.duration = duration;
    this.screen = screen;
  }
}

class Theatre {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.screens = [];
    this.shows = [];
  }

  addScreen(screen) {
    this.screens.push(screen);
  }

  addShow(show) {
    this.shows.push(show);
  }

  getAvailableShows() {
    const currentTime = new Date();
    const availableShows = this.shows.filter(
      (show) => show.startTime > currentTime
    );
    return availableShows;
  }
}

class UserSession {
  constructor(user) {
    this.user = user;
    this.screen = null;
    this.selectedSeats = [];
    this.MAX_PAYMENT_ATTEMPTS = 3;
    this.paymentAttempt = 0;
    this.sessionActive = true;
  }

  selectScreen(screen) {
    if (this.sessionActive) this.screen = screen;
    return "User session not active";
  }

  selectSeats(seatNames) {
    if (this.sessionActive) {
      const overlappingSeats = this.screen.getOverlappingSeats(seatNames);

      if (overlappingSeats.length > 0) {
        console.log(
          "Some of your seats are already booked by other user",
          overlappingSeats
        );
        return;
      }

      this.selectedSeats = seatNames;
      this.screen.bookSeats(this.selectedSeats);
      return this.selectedSeats;
    }
    return "User session not active";
  }

  makePayment() {
    // assume Payment Gateway service
    if (this.sessionActive && this.selectedSeats > 0) {
      const isPaymentSuccess = true;
      if (isPaymentSuccess) {
        console.log(
          `Payment successful for ${this.user}. Selected seats: ${this.selectedSeats}`
        );
        this.sessionActive = false;
      } else {
        this.paymentAttempt++;
        console.log(
          `Payment failed for ${this.user}. Remaining attempts - ${
            this.MAX_PAYMENT_ATTEMPTS - this.paymentAttempt
          }`
        );
        if (this.paymentAttempt >= this.MAX_PAYMENT_ATTEMPTS) {
          console.log(
            `Maximum payment retries reached. Releasing the seats ${this.selectedSeats}`
          );
          this.sessionActive = false;
          this.screen.releaseSeats(this.selectedSeats);
        }
      }
    }
  }
}

const pvr = new Theatre("PVR", "Chennai");

const screen1 = new Screen(1, 3, 2);
const screen2 = new Screen(2, 3, 3);
const morningShow = new Show(
  "Leo",
  new Date("2023-11-23T07:00:00Z"),
  180,
  screen1
);

const afternoonShow = new Show(
  "Leo",
  new Date("2023-11-22T13:00:00Z"),
  180,
  screen2
);

const midnightShow = new Show(
  "Titanic",
  new Date("2023-11-22T23:00:00Z"),
  201,
  screen2
);

pvr.addScreen(screen1);
pvr.addScreen(screen2);
pvr.addShow(morningShow);
pvr.addShow(afternoonShow);
pvr.addShow(midnightShow);

// const vasi = new UserSession("Vasi");
// vasi.selectScreen(screen1);
// vasi.selectSeats(["A1", "B1"]);
// // console.log(vasi);

// vasi.makePayment();
// vasi.makePayment();
// vasi.makePayment();
// console.log("=".repeat(50));
// console.log(vasi);

// vasi.selectSeats(["B2"]);
// console.log(screen1.getAvailableSeats());

const manish = new UserSession("Manish");
const abi = new UserSession("Abishek");

// 2 users logging and books different seats
console.log("Available seats", morningShow.screen.getAvailableSeats());

manish.selectScreen(pvr.screens[0]);
manish.selectSeats(["A1", "A2"]);
manish.makePayment();
console.log("Available seats", morningShow.screen.getAvailableSeats());

abi.selectScreen(pvr.screens[0]);
abi.selectSeats(["B1", "B2"]);
abi.makePayment();
console.log("Available seats", morningShow.screen.getAvailableSeats());

// 2 users logging and books same seats
// console.log("Available seats", morningShow.screen.getAvailableSeats());

// manish.selectScreen(pvr.screens[0]);
// manish.selectSeats(["A1", "A2"]);
// manish.makePayment();
// console.log("Available seats", morningShow.screen.getAvailableSeats());

// abi.selectScreen(pvr.screens[0]);
// abi.selectSeats(["B1", "A2"]);
// abi.makePayment();
// console.log("Available seats", morningShow.screen.getAvailableSeats());
