export function deepEqual(obj1, obj2) {
    if (obj1 === null && obj2 === null)
        return true;
    if (typeof obj1 !== "object" && typeof obj2 !== "object") 
        return obj1 === obj2;

    if (obj1 instanceof Map) {
        if (!(obj2 instanceof Map)) return false;
        if (obj1.size != obj2.size) return false;

        for (let [key, val] of obj1) {
            if (!obj2.has(key)) return false;
            if (!deepEqual(val, obj2.get(key))) return false;
        }
        return true;
    }

    if (obj1 instanceof Set) {
        if (!(obj2 instanceof Set)) return false;
        if (obj1.size != obj2.size) return false;

        for (let val1 of obj1) {
            let hasEqual = false;
            for (let val2 of obj2) {
                if (deepEqual(val1, val2)) {
                    hasEqual = true;
                    break;
                }
            }
            if (!hasEqual) return false;
        }
        return true;
    }

    const keys1 = Object.keys(obj1);
    if (keys1.length !== Object.keys(obj2).length) return false;

    for (let i = 0; i < keys1.length; i++) {
        if (obj1[keys1[i]] === obj1) return obj1 === obj2[keys1[i]];
        if (!deepEqual(obj1[keys1[i]], obj2[keys1[i]])) return false;
    }
    return true;
}
