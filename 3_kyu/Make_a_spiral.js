// https://www.codewars.com/kata/534e01fbbb17187c7e0000c6
function spiralize (n) {
    let array = new Array(n);
    for(let i = 0; i < n; i++)
    {
        array[i]=new Array(n).fill(0);
    }
    let index = [0,0]
    return right(index, array);
}
function right(index,array)
{
    let cheakFirst = false;
    while (index[1]+1 < array.length && ( array[index[0]][index[1]+1] === undefined || array[index[0]][index[1]+2] !==1 ))
    {
        if(index[0] +1 < array.length && array[index[0]+1][index[1]]===1 && cheakFirst){
            break;
        }

        array[index[0]][index[1]] = 1;
        cheakFirst= true;
        index[1]++;
    }
    if( array[index[0]+2][index[1]] === 1 && (index[0] +1 < array.length && array[index[0]+1][index[1]]===1 ) )
    {
        array[index[0]][index[1]] = 1;
        return array;
    }
    return down(index,array);
}
function down(index,array)
{
    let cheakFirst = false;
    while (index[0]+1 < array.length && ( array[index[0]+2] === undefined || array[index[0]+2][index[1]] !==1 ))
    {
        if(index[1] -1 < array.length && array[index[0]][index[1]-1]===1 && cheakFirst){
            break;
        }
        cheakFirst= true;
        array[index[0]][index[1]] = 1;
        index[0]++;
    }
    if( array[index[0]][index[1]-1] === 1 && (index[1] -1 < array.length && array[index[0]][index[1]-1]===1 && cheakFirst))
    {
        array[index[0]][index[1]] = 1;
        return array;
    }

    return left(index,array);
}
function left(index,array)
{
    let cheakFirst = false;
    while (index[1]-1 >= 0 &&( array[index[0]][index[1]-2] === undefined || array[index[0]][index[1]-2] !==1 ))
    {
        if(index[0] -1 < array.length && array[index[0]-1][index[1]]===1 && cheakFirst){
            break;
        }
        cheakFirst= true;
        array[index[0]][index[1]] = 1;
        index[1]--;
    }
    if( array[index[0]-1][index[1]] === 1 && (index[0] -1 < array.length && array[index[0]-1][index[1]]===1 ))
    {
        array[index[0]][index[1]] = 1;
        return array;
    }
    return up(index,array);
}
function up(index,array)
{
    let cheakFirst = false;
    while (index[0]-1 > 0 && ( array[index[0]-2] === undefined || array[index[0]-2][index[1]] !==1 ))
    {
        if(index[1] +1 < array.length && array[index[0]][index[1]+1]===1 && cheakFirst) {
            break;
        }
        cheakFirst= true;
        array[index[0]][index[1]] = 1;
        index[0]--;
    }
    if( array[index[0]][index[1]+1] === 1 &&(index[1] +1 < array.length && array[index[0]][index[1]+1]===1 ) )
    {
        array[index[0]][index[1]] = 1;
        return array;
    }
    return right(index, array)
}
// console.log(spiralize(2))

