import { examGrader } from "./js-exam-grader.js";

const exercises = [
  () =>
    new Promise((res) => setTimeout(() => res({ time: 1000, note: 15 }), 1000)),
  () =>
    new Promise((res) => setTimeout(() => res({ time: 2000, note: 18 }), 2000)),
  () =>
    new Promise((res) => setTimeout(() => res({ time: 500, note: 12 }), 500)),
];

examGrader(3000, exercises).then((finalGrade) => {
  console.log(`Final Grade: ${finalGrade}`);
});

examGrader(4000, exercises).then((finalGrade) => {
  console.log(`Final Grade: ${finalGrade}`);
});