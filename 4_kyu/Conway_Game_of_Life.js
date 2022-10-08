function getGeneration(cells, generations) {
    for (let i = 0; i < generations; i++) {
        let newCells = [];
        for (let j = 0; j <= cells.length + 1; j++) {
            if (j == 0) {
                newCells.push(new Array(cells[0].length + 2).fill(0))
            } else if (j == cells.length + 1) {
                newCells.push(new Array(cells[0].length + 2).fill(0))
            } else {
                newCells.push([0, ...JSON.parse(JSON.stringify(cells[j - 1])), 0])
            }
        }
        cells = newCells;
        newCells = JSON.parse(JSON.stringify(cells))
        for (let indexY = 0; indexY < cells.length; indexY++) {
            for (let indexX = 0; indexX < cells[indexY].length; indexX++) {
                let cheack = cheakAround(cells, indexX, indexY)
                if (cheack < 2 && newCells[indexY][indexX] != 0) {
                    newCells[indexY][indexX] = 0;
                } else if (cheack === 3 && cells[indexY][indexX] === 0) {
                    newCells[indexY][indexX] = 1;
                } else if (cheack === 4 && cells[indexY][indexX] === 1) {
                    newCells[indexY][indexX] = 0;
                }
            }
        }
        while (newCells[0].every(elemenntArray => elemenntArray === 0)) {
            newCells.shift();
        }
        while (newCells[newCells.length - 1].every(elemenntArray => elemenntArray === 0)) {
            newCells.pop();
        }
        while (newCells.every(x => x[0] === 0)) {
            newCells = newCells.map(x => {
                x.shift()
                return x
            })
        }
        while (newCells.every(x => x[x.length - 1] === 0)) {
            newCells = newCells.map(x => {
                x.pop()
                return x
            })
        }

        cells = JSON.parse(JSON.stringify(newCells));
    }
    return cells;
}

function cheakAround(cells1, indexX, indexY) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if ((indexX + j) >= 0 && (indexY + i) >= 0 && (indexX + j) < cells1[indexY].length && (indexY + i) < cells1.length) {
                if (cells1[indexY + i][indexX + j] === 1 && (i !== 0 || j !== 0)) {
                    count++;
                }
            }
        }
    }
    return count;
}


