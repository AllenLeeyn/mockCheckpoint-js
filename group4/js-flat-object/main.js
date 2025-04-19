import { flattenAndMap } from "./js-flat-object.js";

const nestedObj = {
    user: {
      name: "Alice",
      address: {
        city: "Wonderland",
        zip: 12345,
      },
    },
    meta: {
      roles: ["admin", "editor"],
      active: true,
    },
  };
  
  const toUpperCaseStrings = (value) =>
    typeof value === "string" ? value.toUpperCase() : value;
  
  const result = flattenAndMap(nestedObj, toUpperCaseStrings);
  
  console.log(result);