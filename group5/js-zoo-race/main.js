import { animal, zooRace } from "./js-zoo-race.js";

const rabbit = animal("Rabbit", 20, 50, 10, 100, 5, 200);
const turtle = animal("Turtle", 5, 20, 3, 50, 1, 200);
const cheetah = animal("Cheetah", 30, 80, 15, 100, 10, 200);

zooRace([rabbit, turtle, cheetah]).then((winner) => {
  console.log(`The winner is: ${winner}`);
});