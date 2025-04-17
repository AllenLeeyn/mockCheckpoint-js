export function sentencePyramid(sentence) {
    const words = sentence.split(' ');

    for (let i = 1; i <= words.length; i++) {
        const result = [];
        for (let j = 0; j < i; j++) {
            result.push(words[j]);
        }
        console.log(result.join(' '));
    }
}

// this is the simplest of the question