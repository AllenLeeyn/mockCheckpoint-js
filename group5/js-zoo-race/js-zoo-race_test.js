import { tester } from "../../tester.js";
import { animal, zooRace } from "./js-zoo-race.js";

Math.zooRace = undefined;
// /*/ // ⚡
export const tests = [];
const t = (f) => tests.push(f);

t(async ({ eq }) => {
  const rabbit = animal("Rabbit", 20, 50, 10, 100, 5, 200);
  const turtle = animal("Turtle", 5, 20, 3, 50, 1, 200);
  const cheetah = animal("Cheetah", 30, 80, 15, 100, 10, 200);

  const winner = await zooRace([rabbit, turtle, cheetah]);
  return eq(winner, "Cheetah");
});

t(async ({ eq }) => {
  const slowpoke = animal("Slowpoke", 2, 20, 1, 50, 0.5, 100);
  const fastOne = animal("FastOne", 25, 100, 15, 200, 10, 100);

  const winner = await zooRace([slowpoke, fastOne]);
  return eq(winner, "FastOne");
});

t(async ({ eq }) => {
  const one = animal("One", 10, 100, 5, 200, 2, 50);
  const two = animal("Two", 8, 50, 7, 100, 3, 50);

  const winner = await zooRace([one, two]);
  return eq(winner, "One");
});

Object.freeze(tests);

// Run tests
tester(tests);
