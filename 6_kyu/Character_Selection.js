// https://www.codewars.com/kata/5853213063adbd1b9b0000be
function streetFighterSelection(fighters, position, moves) {
    let result = [];
    moves.forEach(element => {
        if (element === 'up') {
            if (position[0] - 1 > -1) {
                position[0]--;
            }
            result.push(fighters[position[0]][position[1]]);
        }
        else if (element === 'down') {
            if (position[0] + 1 !== fighters.length ) {
                position[0]++;
            }
            result.push(fighters[position[0]][position[1]]);
        }
        else if (element === 'left') {
            if (position[1] -1 <0 ) {
                position[1] = fighters[position[0]].length - 1;
            }
            else
            {
                position[1]--;
            }
            result.push(fighters[position[0]][position[1]]);
        }
        else if (element === 'right') {
            if (position[1] +1 === fighters[position[0]].length)   {
                position[1] = 0;
            }
            else
            {
                position[1]++;
            }
            result.push(fighters[position[0]][position[1]]);
        }
    })
    return result;
}