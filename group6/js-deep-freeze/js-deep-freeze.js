export function deepFreeze(obj) {
    if (typeof obj !== "object" ||
        obj === null) throw Error("Input must be a non-null object");
    Object.freeze(obj);

    for (let k of Object.keys(obj)) {
        if (obj[k] === obj) continue;
        if (typeof obj[k] === "object") deepFreeze(obj[k]);
    }
    return obj;
}
