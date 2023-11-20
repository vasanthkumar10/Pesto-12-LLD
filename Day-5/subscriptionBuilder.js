class Subscription {
  constructor(builder) {
    this.plan = builder.plan;
    this.duration = builder.duration;
    this.autoRenew = builder.autoRenew;
  }

  display() {
    console.log("Plan: ", this.plan);
    console.log("Duration: ", this.duration);
    console.log("Auto Renewal: ", this.autoRenew);
  }
}

class SubscriptionBuilder {
  constructor() {
    this.plan = "free";
    this.autoRenew = false;
  }

  setPlan(plan) {
    this.plan = plan;
    return this;
  }

  setDuration(duration) {
    this.duration = duration;
    return this;
  }

  enableAutoRenewal() {
    this.autoRenew = true;
    return this;
  }

  disableAutoRenewal() {
    this.autoRenew = false;
    return this;
  }

  build() {
    return new Subscription(this);
  }
}

// const freePlan = new SubscriptionBuilder().build();
// console.log(freePlan);

function createSubscription(details) {
  const subscription = new SubscriptionBuilder();
  if (details.plan) {
    subscription.setPlan(details.plan);
  }

  if (details.duration) {
    subscription.setDuration(details.duration);
  }

  return subscription.build();
}

const premimumPlan = createSubscription({ plan: "Premium", duration: 6 });
console.log(premimumPlan);
