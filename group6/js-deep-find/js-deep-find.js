export function deepFind(obj, path) {
    if (typeof obj !== "object" ||
        obj === null ||
        obj.length === 0) throw Error("Input must be a non-null object");
    if (typeof path !== "string") throw Error("Path must be a string");

    const keys = path.split('.');
    let result = obj;
    for (let i = 0; i < keys.length; i++) {
        if (!result[keys[i]]) return undefined;
        result = result[keys[i]];
    }
    return result;
}
