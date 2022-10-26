let theLift = function (queues, capacity) {
    let tasks = -1;
    let status = true;
    let lift = [];
    let floor = 0;
    let history = [0];
    while (queues.some(element => element.length !== 0) || lift.length > 0) {
        let cheackChange = false;
        if (lift.length > 0) {
            while (lift.includes(floor)) {
                cheackChange = true;
                lift = removeQueue(lift, lift.findIndex(element => element === floor))
            }
        }
        if (queues[floor].length > 0 ) {
            while (queues[floor].some(element => cheackUpDown(element, floor, status))) {
                cheackChange = true;
                if (lift.length < capacity) {
                    let next = queues[floor].findIndex(element => cheackUpDown(element, floor, status))
                    lift.push(queues[floor][next]);
                    queues[floor] = removeQueue(queues[floor], next)
                }
                else{
                    break;
                }
            }
        }

        // if (lift.length === 0 && tasks === -1) {
        //     if (status) {
        //         for (let i = queues.length - 1; i >= 0; i--) {
        //             if (queues[i].length > 0) {
        //                 if (queues[i].some((element => cheackUpDown(element, floor, status)))) {
        //                     tasks = i;
        //                     break;
        //                 }
        //             }
        //         }
        //     } else {
        //         for (let i = 0; i < queues.length; i++) {
        //             if (queues[i].length > 0) {
        //                 if (queues[i].some((element => cheackUpDown(element, floor, status)))) {
        //                     tasks = i;
        //                     break;
        //                 }
        //             }
        //         }
        //     }
        // }
        if (lift.length === 0 && tasks === -1) {
            if (status) {
                for (let i = queues.length - 1; i >= floor; i--) {
                    if (queues[i].length > 0) {
                        if (queues[i].some((element => cheackUpDown(element, floor, status)))) {
                            tasks = i;
                            break;
                        }
                    }
                }
            } else {
                for (let i = 0; i < floor; i++) {
                    if (queues[i].length > 0) {
                        if (queues[i].some((element => cheackUpDown(element, floor, status)))) {
                            tasks = i;
                            break;
                        }
                    }
                }
            }
        }
        else if (queues.every(element => element.length === 0) && tasks === -1) {
            tasks = 0;
        }
        if (cheackChange) {
            if (!(history.length === 1 && floor === 0) && (history[history.length - 1]) !== floor) {
                history.push(floor);
            }
        }
        if (status) {
            if (floor === tasks && lift.length === 0 ) {
                status = !status;

            } else {
                if ((floor === tasks && lift.length !== 0)) {
                    tasks = -1;
                }
                floor++;
                if (floor + 1 === queues.length || (lift.length === 0 && tasks === -1)) {
                    status = false;
                }
            }
        } else {
            if (floor === tasks && lift.length === 0) {
                status = !status;
            } else {
                if ((floor === tasks && lift.length !== 0)) {
                    tasks = -1;
                }
                floor--;
                if (floor - 1 < 0) {
                    status = true;
                }
            }
        }
    }
    if (history[history.length - 1] !== 0) {
        history.push(0);
    }

    return history;
}

function cheackUpDown(element, floor, status) {
    if (status) {
        return element >= floor;
    } else {
        return element <= floor;
    }
}

function removeQueue(queues, index) {
    return queues.filter((a, e) => e !== index)
}


// let r1 =   [
//     [],              [ 6 ],
//     [ 6, 0, 9, 13 ], [ 14, 6, 5 ],
//     [ 5, 13 ],       [ 0, 10, 13 ],
//     [],              [ 0 ],
//     [ 5, 12, 2 ],    [],
//     [ 5 ],           [ 5 ],
//     [ 14 ],          [ 2, 7 ],
//     []
// ]
let r1 =[[],
    [  ],
    [ 13 ],
    [ 14, 6, 5 ],
    [ 5, 13 ],
    [ 10, 13 ],
    [],
    [ 0 ],
    [ 5, 2 ],
    [],
    [ 5 ],
    [ ],
    [ ],
    [  ],
    []
]
let ar1 = [ 0,
    1,
    2,
    3,
    4,
    5,
    6,
    8,
    12,
    14,
    13,
    11,
    10,
    8,
    7,
    5,
    2,
    0,
    2,
    3,
    4,
    5,
    6,
    13,
    11,
    10,
    8,
    7,
    5,
    0,
    2,
    3,
    4,
    5,
    9,
    11,
    10,
    8,
    5,
    0,
    2,
    3,
    4,
    5,
    13,
    10,
    8,
    5,
    3,
    4,
    5,
    14,
    8,
    5,
    3,
    4,
    5,
    6,
    8,
    2,
    3,
    4,
    5,
    10,
    4,
    5,
    13,
    4,
    13,
    0 ]
let rr1 = theLift(r1, 1);
console.log(rr1);
console.log(JSON.stringify(rr1) == JSON.stringify(ar1))
// let r2 =[ [ 1, 1 ], [ 0, 0, 0 ] ]
// let ar2 =[ 0, 1, 0 ]
// let rr2 = theLift(r2, 4);
// console.log(rr2)
// console.log(JSON.stringify(rr2) == JSON.stringify(ar2))
