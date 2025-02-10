function twoSum(nums: number[], target: number): number[]|null {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i]
        if (map.has(remainder)) {
            return [map.get(remainder), i]; 
        }
        map.set(nums[i], i)
    }
    return null
};

console.log(twoSum([1,8,3,6,9,4,6],12))