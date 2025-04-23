export function flattenObject(obj) {
    const r = {};

    Object.keys(obj).forEach(k => {
        if (typeof obj[k] === "object" && obj[k] !== null) {
            const objK = flattenObject(obj[k]);
            Object.keys(objK).forEach(k2 => {
                r[`${k}.${k2}`] = objK[k2];
            });
        } else r[k] = obj[k];
    });
    return r;
}
