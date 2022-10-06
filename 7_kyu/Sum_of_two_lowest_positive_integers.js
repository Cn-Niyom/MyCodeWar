//https://www.codewars.com/kata/558fc85d8fd1938afb000014
function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a-b);
    return numbers[0]+numbers[1];
}