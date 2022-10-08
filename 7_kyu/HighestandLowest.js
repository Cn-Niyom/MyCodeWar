//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers) {
    array1 = numbers.split(' ')
    max = Math.max(...array1)
    min = Math.min(...array1)
    return max + " " + min
}

console.log(highAndLow("1 2 3"))