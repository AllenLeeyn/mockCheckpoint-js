import { deepFind } from "./js-deep-find.js";

const obj = {
  user: {
    profile: {
      name: "Alice",
      details: {
        age: 25,
        hobbies: ["reading", "gaming"],
      },
    },
  },
};

console.log(deepFind(obj, "user.profile.name")); // "Alice"
console.log(deepFind(obj, "user.profile.details.age")); // 25
console.log(deepFind(obj, "user.profile.details.hobbies.1")); // "gaming"
console.log(deepFind(obj, "user.profile.address.city")); // undefined