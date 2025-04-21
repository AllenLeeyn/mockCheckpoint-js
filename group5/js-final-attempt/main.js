import { FinalAttempt } from "./js-final-attempt.js";

const unreliableAsyncFunction = async (param) => {
  if (Math.random() > 0.7) {
    return `Success with ${param}`;
  }
  throw new Error("Failure");
};

const finalAttempt = FinalAttempt(unreliableAsyncFunction, 3);

finalAttempt("test")
  .then((result) => console.log(result))
  .catch((err) => console.error(err));