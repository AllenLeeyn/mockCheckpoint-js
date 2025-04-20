import { flattenObject } from "./js-flatten-object.js";

const obj = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  f: [4, 5, { g: 6 }],
};

const flattened = flattenObject(obj);
console.log(flattened);