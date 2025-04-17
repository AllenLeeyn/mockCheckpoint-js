export function isSnakePath(grid) {
    const g = {
        rid: grid,
        x: 0,
        y: 0,
        width: grid[0].length,
        height: grid.length,
        found: false,
    }

    return findPath(g);
}

function findPath(g){
    //console.log(`${g.y} ${g.x}`);
    if (g.rid[g.y][g.x] == 1) {
        if (!g.found) {
            g.found = true;
            markPath(g, g.x, g.y);
        } else {
            return false;
        }
    }
    if (g.x + 1 >= g.width) {
        g.x = 0, g.y++;
        if (g.y >= g.height) {
            if (!g.found) return false;
            return true;
        }
    } else {
        g.x++;
    }
    return findPath(g);
}

function markPath(g, x, y){
    if (g.rid[y][x] === 1) {
        g.rid[y][x] = 9;
        if (y-1 >= 0) markPath(g, x, y-1);
        if (y+1 < g.height) markPath(g, x, y+1);
        if (x-1 >= 0) markPath(g, x-1, y);
        if (x+1 < g.width) markPath(g, x+1, y);
    }
}