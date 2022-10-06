//https://www.codewars.com/kata/529bf0e9bdf7657179000008
function validSolution(board) {
    let i;
    for (i = 0; i < 9; i++) {
        let setSudo = new Set();
        board[i].forEach(e => setSudo.add(e));
        if (setSudo.size !== 9) {
            return false;
        }
    }
    for ( i = 0; i < 9; i++) {
        let setSudo = new Set();
        for (let j = 0; j < 9; j++) {
            setSudo.add(board[j][i]);
        }
        if (setSudo.size !== 9) {
            return false;
        }
    }
    for ( i = 0; i < 9; i += 3) {
        for ( let j = 0; j < 9; j += 3) {
            let setSudo = new Set();
            for (let k = i; k < i+3; k++) {
                for (let l = j; l < j+3; l++)
                {

                    setSudo.add(board[k][l]);
                }
            }
            if (setSudo.size !== 9) {
                return false;
            }
        }
    }
    return true;
}