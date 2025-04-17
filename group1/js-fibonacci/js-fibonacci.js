// remember to export
export function fibonacci(n) {
    const fibArr = [0, 1];

    for (let i = 1; i < n; i++) {
        fibArr.push(fibArr[i] + fibArr[i-1])
    }

    return fibArr[n];
}