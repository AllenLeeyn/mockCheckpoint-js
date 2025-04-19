import { mergeAndTransform } from "./js-object-lab.js";

const objArray = [{ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }];

const transforms = [
  (obj) => ({ ...obj, a: obj.a * 10 }),
  (obj) => {
    const { b, ...rest } = obj;
    return rest;
  },
  (obj) => (obj.e ? obj : { ...obj, e: "newKey" }),
];

const result = mergeAndTransform(objArray, transforms);

console.log(result);