function topKFrequentEle(nums, freq) {
    if (nums.length === 0) return nums;

    const countMap = new Map();
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    const priorityQue = [];

    const compare = (a, b) => countMap.get(a) - countMap.get(b);

    for (const num of countMap.keys()) {
        priorityQue.push(num);
        priorityQue.sort(compare);
        if (priorityQue.length > freq) {
            priorityQue.shift();
        }
    }

    return priorityQue;
}

console.log(topKFrequentEle([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
console.log(topKFrequentEle([4, 4, 4, 4, 5, 5, 5, 6, 6, 7], 3)); // Output: [4, 5, 6]
