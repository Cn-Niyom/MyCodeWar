//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
function duplicateEncode(word){
    return [...word.toLowerCase()].map(e => [...word.toLowerCase()].filter(x => x === e).length > 1 ? ")" : "(").join("")
}
console.log(duplicateEncode())