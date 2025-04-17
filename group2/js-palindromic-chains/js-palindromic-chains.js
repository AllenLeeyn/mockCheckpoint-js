export function palindromicChain(numbers) {
    const result = [];
    numbers.forEach(num =>{
        const ogNum = num;
        for (let i = 0; i < 100; i++){
            if (i == 99) {
                result.push(ogNum);
                break;
            }

            if (isPalindrom(num)) {
                result.push(num);
                break;
            }
            num = num + reverseNum(num);
        }
    });

    return result;
}

function reverseNum(num) {
    let result = 0;
    for (let i = 0;num > 0; i++) {
        const curOne = num%10;
        num = (num-curOne)/10;
        result = result *10 + curOne
    }

    return result;
}

function isPalindrom(num) {
    const numStr = String(num);

    for (let i = 0; i < numStr.length; i++) {
        const end = numStr.length-i-1;
        if (numStr[i] != numStr[end]) return false;
    }
    return true;
}