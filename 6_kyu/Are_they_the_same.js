//https://www.codewars.com/kata/550498447451fbbd7600041c/javascript
function comp(array1, array2) {
    if (array1 === undefined || array1 === null ) {
        return false;
    }
    if (array2 === undefined || array2 === null ) {
        return false;
    }
    return array2.every(e => {
        if (array1.includes(Math.sqrt(e))) {
            let found = array1.findIndex(a => a === Math.sqrt(e));
            array1 = array1.filter((value, index) => index !== found)
            return true;
        }
        return false;
    })
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
l1 = [6, 2, 8, 7, 8, 4, 3, 6, 7, 4, 9, 2, 8, 10, 7, 0, 6, 9, 6, 0, 9, 10, 1]
l2 = [64, 81, 16, 1, 100, 36, 36, 16, 64, 64, 0, 81, 4, 0, 49, 81, 49, 100, 49, 4, 36, 36, 9]
b1 =[1,2,3]
b2 =[1,4,4]
// console.log(comp(b1, b2))
console.log(true && !!null)
