export function pipeline(initialValue, functions) {
  // Your implementation here
  const r = {
    finalValue: initialValue,
    steps: [],
  };

  functions.forEach((fn, i) => {
    const newVal = fn(r.finalValue);
    r.steps.push({
        index: i,
        input: r.finalValue,
        output: newVal,
    });
    r.finalValue = newVal;
  });
  return r;
}
