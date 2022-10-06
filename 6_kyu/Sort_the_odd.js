//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/javascript
function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            for (let j = i; j < array.length; j++) {
                if (array[j] < array[i] && array[j]%2  !== 0) {
                    temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                }
            }
        }
    }
    return array;
}

console.log(sortArray([ -1, 15, 0, -49, -45, 49, -44 ] ));
//Interest
// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
// }