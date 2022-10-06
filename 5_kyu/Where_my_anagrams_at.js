//https://www.codewars.com/kata/523a86aa4230ebb5420001e1
function anagrams(word, words) {
    word = [...word].sort((a,b) => {return a.localeCompare(b)} ).join('');
    return words.filter(element => [...element].sort((a,b) => {return a.localeCompare(b)} ).join('')===word)
}