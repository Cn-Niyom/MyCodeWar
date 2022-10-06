//https://www.codewars.com/kata/517abf86da9663f1d2000003
function toCamelCase(str) {
    if (str.length === 0) {
        return str;
    }
    let newstr = str.split(/[-_]+/).map(element => element.charAt(0).toUpperCase() + element.slice(1)).join('');
    return str.charAt(0) === str.charAt(0).toUpperCase() ? newstr : newstr.charAt(0).toLowerCase() + newstr.slice(1);
}