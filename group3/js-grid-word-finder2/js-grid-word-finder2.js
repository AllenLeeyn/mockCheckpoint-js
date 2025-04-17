export function gridWordFinder2(grid, word) {
    const gProperty = {
        grid: grid,
        width: grid[0].length,
        height: grid.length,
        curX: 0,
        curY: 0,
        result: [],
        word: word,
        wordLen: word.length,
    }
    //console.log(gProperty);
    findWord(gProperty);
    return gProperty.result;
}

function findWord(g){
    //console.log(`${g.curY} ${g.curX}`);
    
    if (g.curY+ g.wordLen <= g.height) {
        if (isWordMatchVertical(g, 0)) g.result.push({
            x: g.curX,
            y: g.curY,
            direction: "vertical",
        });
    }
    if (g.curX + g.wordLen <= g.width) {
        if (isWordMatchHorizontal(g, 0)) g.result.push({
            x: g.curX,
            y: g.curY,
            direction: "horizontal",
        });
    }
    
    if (g.curX + 1 >= g.width) {
        if (g.curY + 1 >= g.height ) return;
        g.curX = 0, g.curY++;
    } else {
        g.curX++;
    }
    findWord(g);
}

function isWordMatchHorizontal(g, i) {
    //console.log(`${g.curY} ${g.curX+i} ${g.grid[g.curY][g.curX + i]} ${g.word[i]}`);
    if (g.grid[g.curY][g.curX + i] === g.word[i]){
        if (i+1 === g.word.length) {
            return true;
        }
        return isWordMatchHorizontal(g, i+1);
    }
    return false;
}

function isWordMatchVertical(g, i) {
    //console.log(`${g.curY} ${g.curX+i}`);
    if (g.grid[g.curY + i][g.curX] === g.word[i]){
        if (i+1 === g.word.length) {
            return true;
        }
        return isWordMatchVertical(g, i+1);
    }
    return false;
}