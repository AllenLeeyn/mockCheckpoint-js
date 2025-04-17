export function nestedArrayReverser(words){
    if (!Array.isArray(words)) return;

    words = words.reverse().map(value =>
        Array.isArray(value) ? nestedArrayReverser(value) : value
    );
    return words.join(' ');
}
