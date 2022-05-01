let instance;
let count = 0;

class Singleton {
  constructor() {
    if (instance) {
      throw new Error("you can only create one instance");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  increment() {
    ++count;
  }

  decrement() {
    --count;
  }

  getCount() {
    return count;
  }
}

module.exports = Object.freeze(new Singleton());
