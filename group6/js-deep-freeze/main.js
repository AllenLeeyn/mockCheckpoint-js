import { deepFreeze } from "./js-deep-freeze.js";

const data = {
  user: "Alice",
  stats: {
    score: 100,
    achievements: ["gold", "silver"],
  },
};

deepFreeze(data);

data.user = "Bob"; // This should fail
data.stats.score = 200; // This should fail
data.stats.achievements.push("bronze"); // This should fail

console.log(data);