//https://www.codewars.com/kata/5262119038c0985a5b00029f
function isPrime(num) {
    if (num === 2) {
        return true
    } else if (num <= 1 || num % 2 == 0) {
        return false
    } else {
        for (let count = 3; count <= Math.sqrt(num); count +=2) {
            if (num % count == 0) {
                return false;
            }
        }
        return true;
    }
}