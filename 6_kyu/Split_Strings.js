//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
function solution(text){
    // your code here
    if(text.length === 0)
    {
        return [];
    }
    if(text.length %2 !==0)
    {
        text += '_';
    }
    let result = [];
    let newText = [...text]
    let temp
    for(let i in newText)
    {

        if(Number(i) % 2 === 0)
        {
            temp = newText[i];
        }
        else
        {
            temp = temp +newText[i];
            result.push(temp);
        }

    }
    return result;
}