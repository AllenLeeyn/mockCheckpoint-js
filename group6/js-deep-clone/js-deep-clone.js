export function deepClone(obj) {
    if (typeof obj !== "object" ||
        obj === null ||
        obj.length === 0) throw Error("Input must be a non-null object");
        
    if (Array.isArray(obj)) {
        const arr = [];
        obj.forEach(v => {
            if (typeof v === "object") {
                v = deepClone(v);
            }
            arr.push(v)
        });
        return arr;
    }

    const r = {};
    for (let k of Object.keys(obj)) {
        if (typeof obj[k] === "object") {
            if (obj[k] === null) {
                r[k] = null;
            } else if (obj[k] === obj) {
                r[k] = r;
            } else r[k] = deepClone(obj[k]);
        } else {
            r[k] = obj[k];
        }
    }

    return r;
}
