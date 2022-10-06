//https://www.codewars.com/kata/5839edaa6754d6fec10000a2
function findMissingLetter(array)
{
    let initLetter = array[0].charCodeAt(0);
    let endLetter = array[array.length - 1].charCodeAt(0);


    let cheackArray = [];
    for(let i = initLetter; i <= endLetter; i++)
    {
        cheackArray.push(String.fromCharCode(i));
    }
    return cheackArray.filter(element => array.indexOf(element) === -1)[0];
}