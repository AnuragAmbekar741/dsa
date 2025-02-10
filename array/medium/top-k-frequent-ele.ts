function topKFrequent(nums: number[], k: number): number[] {
    if (k === nums.length) {
        return nums;
    }

    // Step 1: Count frequency of each number
    const count: Map<number, number> = new Map();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    // Step 2: Min-Heap (Priority Queue)
    const minHeap: number[] = [];

    // Sorting comparator (sort by frequency)
    const compare = (a: number, b: number) => count.get(a)! - count.get(b)!;

    for (const num of count.keys()) {
        minHeap.push(num);
        minHeap.sort(compare); // Sort heap based on frequency

        // Maintain heap size of k
        if (minHeap.length > k) {
            minHeap.shift(); // Remove element with the lowest frequency
        }
    }

    // Step 3: Return Top K Frequent Elements
    return minHeap;
}

// Example Usage
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
