//https://www.codewars.com/kata/52aae14aa7fd03d57400058f/train/javascript
function removeZeros(array) {
    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc

    // the correctly sorted array should be returned.
    for (let i = 0; i < array.length; i++) {
        while (array[i] == 0) {
            let cheack = false;
            for (let k = i + 1; k < array.length; k++) {
                if (array[k] != 0) {
                    cheack = true;
                    break;
                }
            }
            if (cheack) {
                let temp = array[i];
                for (let j = i; j < array.length; j++) {
                    if (j == array.length - 1) {
                        array[j] = temp;
                    } else {
                        array[j] = array[j + 1];
                    }
                }
            } else {
                break
            }
        }
    }
    return array;
}

console.log(removeZeros([5]));

