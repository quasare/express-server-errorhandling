const {
    mean,
    median,
    mode
} = require('./math')

beforeEach(() => {
    nums = [3, 9, 12]
    nums2 = [3, 6, 8, 10]
});

test('Averages array', () => {
    expect(mean(nums)).toEqual(8)
})

describe('madian for different array lengths', () => {
    test('Median of odd lenght array', () => {
        expect(median(nums)).toEqual(9)
    })
    test('Median of even array', () => {
        expect(median(nums2)).toEqual(7)
    })
})

describe('test mode', () => {
    beforeEach(() => {
        nums.push(3)
    })
    test('Return mode from array', () => {
        expect(mode(nums)[0]).toEqual(3)
    })
})