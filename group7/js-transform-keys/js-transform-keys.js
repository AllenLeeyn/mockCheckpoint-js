export function transformKeys(obj, transformFn) {
    const keys = Object.keys(obj)

    const r = {};
    keys.forEach(k => {
        const newK = transformFn(k);
        if (typeof obj[k] === "object" && obj[k] !== null && !Array.isArray(obj[k])) {
            r[newK] = transformKeys(obj[k], transformFn);
        } else {
            r[newK] = obj[k];
        }
    });
    return r;
}
