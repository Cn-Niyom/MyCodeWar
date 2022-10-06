//https://www.codewars.com/kata/52e88b39ffb6ac53a400022e
function int32ToIp(int32) {
    if (2 ** 32 <= int32 || int32 < 0) {
        return "";
    } else {
        let result = "";
        for (let index = 3; index >= 0; index--) {
            let temp = 0;
            if (int32 >= 2 ** (8 * index)) {
                for (let index2 = 7; index2 >= 0; index2--) {
                    let powerNow = (2 ** (index2 + index * 8));
                    if (int32 >= powerNow) {
                        temp +=  Math.floor(int32 / powerNow) === 1 ? 2**index2: 0;
                        int32 = int32 - Math.floor(int32 / powerNow) * powerNow
                    }
                }
            }
            result += temp;
            if (index !== 0) {
                result += ".";
            }
        }
        return result
    }
}