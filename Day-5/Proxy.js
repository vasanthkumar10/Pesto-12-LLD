// proxy

const Animesh = {
  name: "Animesh",
  age: 10,
};

// freeze
// Object.freeze(Animesh);

// handler - access
const handler = {
  // read access
  get(target, property) {
    // console.log("target", target);
    // console.log("property", property);
    if (property === "name") return target[property].toUpperCase();
    else return "Unauthorised";
  },

  set(target, property, newValue) {
    if (property === "name") target[property] = newValue;
  },
};

const vasanth = new Proxy(Animesh, handler);
// console.log("name --->", vasanth.name);
// console.log("age --->", vasanth.age);

vasanth.name = "Raj";
vasanth.age = 20;
console.log(vasanth);
