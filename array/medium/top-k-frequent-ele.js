function topKFrequencyEle(nums, k) {
    if (nums?.length === 0) return nums
    const countMap = new Map()
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1)
    }
    const topK = []
    for (let num of countMap.keys()) {
        topK.push(num)
        topK.sort((a, b) => countMap.get(a) - countMap.get(b))
        if (topK.length > k) {
            topK.shift()
        }
    }
    return topK
}

console.log(topKFrequencyEle([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
console.log(topKFrequencyEle([4, 4, 4, 4, 5, 5, 5, 6, 6, 7], 3)); // Output: [4, 5, 6]
console.log(topKFrequencyEle([1], 1)); // Output: [1]
console.log(topKFrequencyEle([1, 2, 3, 4, 5], 2)); // Output: [4, 5] (or any two highest occurring)
console.log(topKFrequencyEle([], 3)); // Output: []
