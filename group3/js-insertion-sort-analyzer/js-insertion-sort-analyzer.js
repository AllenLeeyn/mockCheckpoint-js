export function insertionSortAnalyzer(arr, comparator) {
    let iterations = 0;
    let swaps = 0;

    for (let starting = 1; starting <arr.length; starting++) {
        for (let i = starting; i >= 0; i--){ // i think this condition is incorrect... should be i > 0
            iterations++;
            if (comparator(arr[i-1], arr[i]) > 0) {
                swaps++;
                const temp = arr[i-1];
                arr[i-1] = arr[i], arr[i] = temp;
            } else { break; }
        }
    }

    return {
        sortedArray: arr,
        iterations,
        swaps,
    };
}
