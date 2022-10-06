//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript
function accum(s) {
    let newString = [...s]
    for (let e in newString) {
        newString[e] = newString[e].toUpperCase() + s[e].toLowerCase().repeat(e);
    }
    return newString.join('-');
}

console.log(accum("abcd"))