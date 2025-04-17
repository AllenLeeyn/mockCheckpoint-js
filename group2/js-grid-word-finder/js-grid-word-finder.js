export function gridWordsFinder(grid, words) {
    if (words.length === 0 || grid.length === 0) return [];
    const gWords = [];
    grid.forEach(g=>{
        gWords.push(g.join(''));
    });

    const gridH = grid.length;
    const gridW = grid[0].length
    for (let i = 0; i < gridW; i++) {
        const wordArr = [];

        for (let j = 0; j < gridH; j++) {
            wordArr.push(grid[j][i]);
        }
        gWords.push(wordArr.join(''));
    }

    const result = [];
    words.forEach(word => {
        for (let i = 0;  i < gWords.length; i++) {
            if (gWords[i].includes(word)){
                result.push(word);
                break;
            }
        }
    })
    return result;
}

// grab all rows and columns into an array of string
// this way we can use String.includes to check if word is in grid.
// getting the row string is simple. just interate through the array and use Array.join('')
// getting the column string is trickier, but we can use the same logic as row.
// We just need to build the array before we use Array.join('')
