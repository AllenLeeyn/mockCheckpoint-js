import { deepClone } from "./js-deep-clone.js";

const original = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming"],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};

const cloned = deepClone(original);

cloned.name = "Bob";
cloned.hobbies.push("chess");
cloned.address.city = "Nowhere";

console.log(original);
console.log(cloned);