export function mergeAndTransform(objects, transforms) {
    const r = {
        finalObject: objects[0],
        transformationsCount: 0,
        keysAdded: 0,
        keysOverwritten: 0,
    }

    for (let i = 1; i < objects.length; i++) {
        const keys = Object.keys(objects[i]);

        keys.forEach(k => {
            (r.finalObject[k]) ? r.keysOverwritten++ : r.keysAdded++;
            r.finalObject[k] = objects[i][k];
        });
    }

    transforms.forEach(tx => {
        r.transformationsCount++;
        r.finalObject = tx(r.finalObject);
    });

    return r;
}
