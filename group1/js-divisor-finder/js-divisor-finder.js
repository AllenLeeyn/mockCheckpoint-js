export function divisors(n) {
    n = (n < 0) ? -n : n;
    const result = [];

    for (let i = 1; i <= n/2; i++) {
        if (n%i === 0) result.push(i);
    }
    return result;
}