export function swappableObject(obj) {
    const handler = {
        get(obj, key) {
            if (obj[key]) return obj[key];
            for (const k in obj) {
                if (obj[k] === key) return k;
            }
        }
    }
    return new Proxy(obj, handler);
}