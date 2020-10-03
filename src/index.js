exports.min = function min(array) {
    if (typeof array === "undefined" || array.length === 0) {
        return 0;
    } else {
        const arr = array.sort((a, b) => a - b);
        return arr[0];
    }
};

exports.max = function max(array) {
    if (typeof array === "undefined" || array.length === 0) {
        return 0;
    } else {
        const arr = array.sort((a, b) => a - b);
        return arr[arr.length - 1];
    }
};

exports.avg = function avg(array) {
    if (typeof array === "undefined" || array.length === 0) {
        return 0;
    } else {
        return (
            array.reduce(
                (accumulator, currentValue) => accumulator + currentValue
            ) / array.length
        );
    }
};
