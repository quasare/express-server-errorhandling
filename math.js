const mean = (num) => {
    let sum = num.reduce((acc, cur) => acc + cur)
    let avg = sum / num.length
    return avg
}

const median = (num) => {
    midPoint = num.length
    idx = midPoint / 2
    if (midPoint % 2 === 0) {
        let ans = (num[idx - 1] + num[idx]) / 2
        return ans
    } else {
        center = Math.floor(idx)
        return num[center]
    }
}

const mode = (nums) => {
     modes = []
     count = []
     i = 0
     number = 0
     maxIndex = 0;

    for (i = 0; i < nums.length; i += 1) {
        number = nums[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
};

const getArray = (res) => {
    nums = res.split(',')
    intNums = nums.map(n => parseInt(n, 10))
    return intNums
}

module.exports = {
    mean: mean,
    median: median,
    mode: mode,
    getArray: getArray
}