export function sleepBreaker(delay, breaker) {
    return new Promise((res) => {
        const id = setTimeout(res, delay);

        breaker().then(() => {
            clearTimeout(id);
            res();
        });
    });
}
