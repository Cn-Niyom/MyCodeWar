function digPow(n, p){
    // ...
    let sumDigitPow=[...String(n)].reduce((previousValue, currentValue) => previousValue +Math.pow(currentValue,p++) ,0);
    return sumDigitPow%n ===0 ? sumDigitPow/n : -1;
}