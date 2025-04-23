export function trapObject(obj, fn) {
    const handler = {
        set(obj, key, val) {
            fn("set", key, obj[key], val);
            return obj[key] = val;
        },
        get(obj, key) {
            fn("get", key, obj[key]);
            if (typeof obj[key] === "object" && obj[key] !== null) 
                return new Proxy(obj[key], handler);
            return obj[key];
        }
    }
    return new Proxy(obj, handler);
}
