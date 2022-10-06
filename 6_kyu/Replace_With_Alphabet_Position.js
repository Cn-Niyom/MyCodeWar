function alphabetPosition(text) {
    return text.toLowerCase().split('').filter(element => element.charCodeAt(0)-96 >= 1 && element.charCodeAt(0)-96 <= 26).map(element => element.charCodeAt(0)-96).join(' ');
}