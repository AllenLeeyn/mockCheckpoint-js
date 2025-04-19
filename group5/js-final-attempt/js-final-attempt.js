export  function FinalAttempt(callback, count) {
    return async function () {
        for (let i = 0; i < count;i++) {
            try {
                return await callback(...arguments);
            } catch {}
        }
        return "Final Attempt Fail";
    };
}