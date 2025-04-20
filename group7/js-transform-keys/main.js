import { transformKeys } from "./js-transform-keys.js";

const obj = {
  FirstName: "Alice",
  LastName: "Doe",
  Address: {
    StreetName: "Main St",
    ZipCode: 12345,
  },
};

const toSnakeCase = (key) =>
  key
    .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    .replace(/^_/, "");
const transformed = transformKeys(obj, toSnakeCase);
console.log(transformed);