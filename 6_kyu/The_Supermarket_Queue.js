//https://www.codewars.com/kata/57b06f90e298a7b53d000a86
function queueTime(customers, n) {
    if(customers.length === 0)
    {
        return 0;
    }
    let time = 0;
    let arr = Array(n).fill(-1)
    while (customers.length !== 0 || arr.some(element => element !== 0)) {
        time++;
        for (let temp in arr) {
            if ((arr[temp] === -1 || arr[temp] === 0) && customers.length !== 0) {
                arr[temp] = customers.shift();
            }
            if (arr[temp] > 0) {
                arr[temp]--;
            } else if (customers.length === 0) {
                arr[temp] = 0;
            }

        }

    }
    return time

}