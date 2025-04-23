export async function tester(tests) {
    for (let i = 0; i < tests.length; i++) {
      const testFn = tests[i];
      try {
        const fnSource = testFn.toString();
        const result = await testFn({
          eq: (a, b = undefined) => {
            const passed = JSON.stringify(a) === JSON.stringify(b);
            console.log(`
  expected: ${JSON.stringify(b)}
  actual:   ${JSON.stringify(a)}
`);
            if (!passed) {
              throw new Error(`${fnSource}`);
            }
            return true;
          }
        });
  
        if (result === false) {
          throw new Error("incorrect output");
        }
  
        console.log(`✅ Test ${i + 1} passed`);
      } catch (err) {
        console.error(`❌ Test ${i + 1} failed:`, err.message);
      }
    }
  }
  