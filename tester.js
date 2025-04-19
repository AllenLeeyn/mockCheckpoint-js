export async function tester(tests) {
    for (let i = 0; i < tests.length; i++) {
      const testFn = tests[i];
      try {
        const fnSource = testFn.toString();
        const result = await testFn({
          eq: (a, b = "") => {
            const passed = JSON.stringify(a) === JSON.stringify(b);
            if (!passed) {
              throw new Error(`
  case:     ${fnSource}
  expected: ${JSON.stringify(b)}
  actual:   ${JSON.stringify(a)}`);
            }
            return true;
          }
        });
  
        if (result === false) {
          throw new Error(`Returned false`);
        }
  
        console.log(`✅ Test ${i + 1} passed`);
      } catch (err) {
        console.error(`❌ Test ${i + 1} failed:`, err.message);
      }
    }
  }
  