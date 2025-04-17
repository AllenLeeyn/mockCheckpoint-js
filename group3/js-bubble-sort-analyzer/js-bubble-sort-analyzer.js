export function bubbleSortAnalyzer(arr, comparator) {
    let iterations = 0;
    let swaps = 0;
    let isSorted = false;
    let ending = 1;

    for (;!isSorted;) {
        let hasSwap = false;
        for(let i = 0; i <= arr.length-1-ending; i++) {
            iterations++;
            if (comparator(arr[i], arr[i+1]) > 0) {
                hasSwap = true;
                const temp = arr[i];
                arr[i] = arr[i+1], arr[i+1] = temp;
                swaps++;
            }
        }
        if (!hasSwap || ending+1 === arr.length) isSorted = true;
        ending++;
    }

    return {
        sortedArray: arr,
        iterations: iterations,
        swaps: swaps
    }
}