// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript
function findShort(s){
    return Math.min(...s.split(" ").map( e=> e.length))
}
console.log(findShort("Let's travel abroad shall we"))
