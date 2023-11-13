class NotificationObserver {
  // observing - observer pattern
  notify(channelName, videoTitle) {
    console.log(`${this.name}: ${channelName} uploaded a video ${videoTitle}`);
  }

  notifyUpcomingVideo(channelName, videoTitle) {
    console.log(
      `${this.name}: ${channelName} has an upcoming video ${videoTitle}`
    );
  }

  notifyComment(user, message) {
    console.log(`${user.name} replied on your comment: ${message}`);
  }
}

class User extends NotificationObserver {
  constructor(name) {
    super();
    this.name = name;
  }
}

class YoutubeChannel {
  constructor(channelName, notification) {
    this.channelName = channelName;
    this.subscribers = [];
    this.notification = notification;
  }

  subscribe(user) {
    console.log(`${user.name} subscribed to ${this.channelName}`);
    this.subscribers.push(user);
  }

  unsubscribe(user) {
    console.log(`${user.name} unsubscribed to ${this.channelName}`);
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== user
    );
  }

  uploadVideo(videoTitle) {
    console.log("=".repeat(50));
    console.log(`New video uploaded by ${this.channelName}: ${videoTitle}`);
    console.log("=".repeat(50));
    this.notification.notifyVideoUploaded(
      this.channelName,
      this.subscribers,
      videoTitle
    );
  }

  upcomingVideo(videoTitle) {
    console.log("=".repeat(50));
    console.log(`Upcoming video from ${this.channelName}: ${videoTitle}`);
    console.log("=".repeat(50));
    this.notification.notifyVideoUpcoming(
      this.channelName,
      this.subscribers,
      videoTitle
    );
  }

  comment(user, message, subscriber) {
    console.log(
      `${user.name} replied on ${subscriber.name} comment: ${message}`
    );
    this.notification.notifyComment(user, message, subscriber);
  }
}

class NotificationSystem {
  notifyVideoUploaded(channelName, subscribers, videoTitle) {
    subscribers.forEach((subscriber) => {
      subscriber.notify(channelName, videoTitle);
    });
  }

  notifyVideoUpcoming(channelName, subscribers, videoTitle) {
    subscribers.forEach((subscriber) => {
      subscriber.notifyUpcomingVideo(channelName, videoTitle);
    });
  }

  notifyComment(user, message, subscriber) {
    subscriber.notifyComment(user, message);
  }
}

const virat = new User("virat");
const dhoni = new User("dhoni");
const rohit = new User("rohit");

// Notification Mechanism
const youtubeNotification = new NotificationSystem();

// channel
const pestoChannel = new YoutubeChannel("Pestotech", youtubeNotification);
const easyEngineering = new YoutubeChannel(
  "Easy Engineering",
  youtubeNotification
);

pestoChannel.subscribe(virat);
pestoChannel.subscribe(dhoni);

easyEngineering.subscribe(dhoni);
easyEngineering.subscribe(rohit);

pestoChannel.uploadVideo("LLD day-3 class");
easyEngineering.uploadVideo("Thermodynamics in simple terms");
pestoChannel.unsubscribe(dhoni);

pestoChannel.uploadVideo("LLD day-4 class");
easyEngineering.uploadVideo("Heat vs temperature");

easyEngineering.upcomingVideo("Elon musk on mars");

easyEngineering.comment(dhoni, "good comment", virat);
