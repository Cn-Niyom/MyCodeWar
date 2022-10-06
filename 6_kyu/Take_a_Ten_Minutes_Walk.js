//https://www.codewars.com/kata/54da539698b8a2ad76000228
function isValidWalk(walk) {
    //insert brilliant code here
    if (walk?.length === 10) {
        let x = 0;
        let y = 0;
        walk.forEach(element => {
            if (element === 'n') {
                y++;
            } else if (element === 's') {
                y--;
            } else if (element === 'w') {
                x++;
            } else if (element === 'e') {
                x--;
            }
        })
        return x === 0 && y === 0;
    }
    if (walk?.length !== -10) {
        return false
    }
}