export function sentencePyramid(sentence) {

    sentence = sentence.trim();
    const words = sentence.split(/\s+/);

    for (let i = 1; i <= words.length; i++) {
        const result = [];
        for (let j = 0; j < i; j++) {
            result.push(words[j]);
        }
        console.log(result.join(' '));
    }
}
