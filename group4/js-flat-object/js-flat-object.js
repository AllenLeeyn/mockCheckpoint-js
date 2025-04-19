export function flattenAndMap(obj, mapper) {
    const fObj = flatten(obj);
    const r = {
        flattened : fObj,
        originalKeysCount: Object.keys(fObj).length,
        transformedKeysCount: Object.keys(fObj).length,
    }
    
    const keys = Object.keys(r.flattened);
    keys.forEach(k => {
        if (Array.isArray(r.flattened[k])) {
            r.flattened[k].forEach((v, i) => {
                r.flattened[k][i] = mapper(r.flattened[k][i]);
            });
        } else {
            r.flattened[k] = mapper(r.flattened[k]);
        }
    });
    return r;
}

function flatten(obj){
    const keys = Object.keys(obj);
    const r = {};

    keys.forEach(k => {
        if(typeof obj[k] === "object" && !Array.isArray(obj[k])) {
            const fObj = flatten(obj[k]);
            const fKeys = Object.keys(fObj);
            fKeys.forEach(fK => {
                r[`${k}.${fK}`] = fObj[fK];
            });
        } else {
            r[k] = obj[k];
        }
    })
    return r;
}