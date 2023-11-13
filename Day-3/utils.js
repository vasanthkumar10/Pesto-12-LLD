const uuid = require("uuid");

const generateId = () => uuid.v4();

const arr = [1, 2, 3, 4, 5, 6, 7];

const shuffled = arr.sort(() => Math.random() - 0.5);
console.log(shuffled);

module.exports = {
  generateId,
};
