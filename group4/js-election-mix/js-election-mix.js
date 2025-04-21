export function createCurriedFilterAndMap(criteria, mapper) {
    // Your implementation here
    return function (obj) {
        const keys = Object.keys(obj);
        const r = {
            filteredObject: {},
            keysKept: 0,
            keysFilteredOut: keys.length,
        }

        keys.forEach(k => {
            if (criteria(k, obj[k])) {
                r.filteredObject[k] = mapper(obj[k]);
                r.keysFilteredOut--;
                r.keysKept++;
            }
        })

        return r;
    }
}
