const sumAll = function (min, max) {
    let sum = 0;
    
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }
    if (min < 0 || max < 0) {
        return "ERROR";
    }

    if (min > max) {
        const temporary = min;
        min = max;
        max = temporary;
    }


    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  };

//   Changing sides of min / max to ensure that it works when min is bigger than max


    
  module.exports = sumAll;