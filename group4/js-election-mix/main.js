import { createCurriedFilterAndMap } from "./js-election-mix.js";

const isNumberValue = (key, value) => typeof value === "number";
const increment = (val) => (typeof val === "number" ? val + 1 : val);

const filterAndIncrementNumbers = createCurriedFilterAndMap(
  isNumberValue,
  increment,
);

const inputObject = {
  name: "Alice",
  age: 25,
  score: 99,
  active: true,
};

const result = filterAndIncrementNumbers(inputObject);

console.log(result);