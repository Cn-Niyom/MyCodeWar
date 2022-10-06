//https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
    // build here
    let result = [];
    for (let floor = 1; floor <= nFloors; floor++) {
        let tempstring = "";

        for (let i = 0; i < nFloors - floor; i++) {
            tempstring += " ";
        }
        for (let i = 0; i < 2 * floor - 1; i++) {
            tempstring += "*";
        }
        for (let i = 0; i < nFloors - floor; i++) {
            tempstring += " ";
        }

        result.push(tempstring);
    }
    return result;
}