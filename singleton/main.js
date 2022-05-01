const Singleton = require("./SingletonFactory");

console.log("=== main ===");

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2);
console.log(instance1.getCount(), instance2.getCount());

instance1.increment();
instance1.increment();
instance1.increment(); // 3

console.log(instance1.getCount(), instance2.getCount());

instance2.decrement();
instance2.decrement();
instance2.decrement();
instance2.decrement(); // -1

console.log(instance1.getCount(), instance2.getCount());

// const singleton = require("./SingletonClass");

// const instance1 = singleton.getInstance();
// const instance2 = singleton.getInstance();

// console.log(instance1 === instance2);
// console.log(instance1.getCount(), instance2.getCount());

// instance1.increment();
// instance1.increment();
// instance1.increment(); // 3

// console.log(instance1.getCount(), instance2.getCount());

// instance2.decrement();
// instance2.decrement();
// instance2.decrement();
// instance2.decrement(); // -1

// console.log(instance1.getCount(), instance2.getCount());
