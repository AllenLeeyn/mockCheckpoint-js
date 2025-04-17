export function evenSum(nums) {
    let result = 0;
    for (let i = 0; i <= nums; i += 2) {
        result += i;
    }
    return result;
}