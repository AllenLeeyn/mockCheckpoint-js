export function reverseChunks(arr, chunkSize) {
    if (chunkSize <= 0) return arr;
    if (chunkSize > arr.length) chunkSize = arr.length;

    for (let i = 0; i < arr.length; i++) {
        let end = chunkSize * (1 + Math.floor(i / chunkSize)) - (i % chunkSize);
        if ((i % chunkSize) >= chunkSize/2) continue;
        end = (end > arr.length) ? arr.length -1 : end-1;

        const temp = arr[i];
        arr[i] = arr[end], arr[end] = temp;
    }
    return arr;
}

// remember to check if chunkSize is bigger than arr.length
// rememeber to not swap after hitting half way point of chunkSize. This will undo te work done.

// calculating endpoint for each chunk requires a bit of effort, but it should be doable.
// need to figure a way to know which chunk you are looking at: 
// to get the current chunk: (Math.floor(i / chunkSize)) 
// to get the end of current chunk: (chunkSize * (1 + Math.floor(i / chunkSize)))
// to get the current array element to swap: (chunkSize * (1 + Math.floor(i / chunkSize)) - (i % chunkSize))
