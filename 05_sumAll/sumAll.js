const sumAll = function(x, y) {
    let sum = 0;
    // zapozyczone z solution \/
    if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    if (x < 0 || y < 0 || isNaN(x) || isNaN(y)) {
        return "ERROR"
    } else if (x > y) {
        for (y;y <= x; y++) {
            sum += y
        }
        return sum;
    } else if (x < y) {
        for (x;x <= y; x++) {
            sum += x
        }
        return sum;
    }
}
// Do not edit below this line
module.exports = sumAll;
