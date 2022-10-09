//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
// Sum Numbers
function sum (numbers) {
    return numbers.filter(e => typeof e === 'number' ).length === 0 ? 0 : numbers.filter(e => typeof e === 'number' ).reduce((sum, e) => sum + e,0)
}
console.log(sum([1, 5.2, 4, 0, -1]));