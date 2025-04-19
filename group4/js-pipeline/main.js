import { pipeline } from "./js-pipeline.js";

const functions = [
    (val) => val + 1,
    (val) => val * 2,
    (val) => `Result: ${val}`,
  ];
  
  const result = pipeline(0, functions);
  
  console.log(result);