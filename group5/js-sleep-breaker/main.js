import { sleepBreaker } from "./js-sleep-breaker.js";

const breaker = async () => {
  await new Promise((res) => setTimeout(res, 100));
  return true;
};

sleepBreaker(1000, breaker).then(() => {
  console.log("Wake up!");
});