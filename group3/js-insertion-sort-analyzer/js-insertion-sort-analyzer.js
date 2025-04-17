export function insertionSortAnalyzer(arr, comparator) {
    let iterations = 0;
    let swaps = 0;
    let starting = 1;
    let isSorted = false;

    if (arr.length === 0) isSorted = true;
    for (; !isSorted;) {
        for (let i = starting; i > 0; i--){ // i think this condition is incorrect... should be i > 0
            iterations++;
            if (comparator(arr[i-1], arr[i]) > 0) {
                swaps++;
                const temp = arr[i-1];
                arr[i-1] = arr[i], arr[i] = temp;
            } else { break; }
        }

        starting++;
        if ( starting === arr.length) isSorted = true;
    }

    return {
        sortedArray: arr,
        iterations,
        swaps,
    };
}
