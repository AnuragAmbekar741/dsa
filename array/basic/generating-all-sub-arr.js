// Given an array arr[], the task is to generate all the possible subarrays of the given array.

//     Examples:

// Input: arr[] = [1, 2, 3]
// Output: [[1], [1, 2], [2], [1, 2, 3], [2, 3], [3]]

// Input: arr[] = [1, 2]
// Output: [[1], [1, 2], [2]]


// Iterative Approach
// To generate a subarray, we need a starting index from the original array.
// For choosing the starting index, we can run a loop from[0 to n - 1] and consider each i as the starting index.For each starting index i, 
// we can select an ending index from the range[i to n - 1]. A nested loop from[i to n - 1] will help in selecting the ending index.
// Once we have the starting and ending indices, we need an innermost loop to print the elements in this subarray.


function getAllSubArray(arr) {
    const n = arr.length
    const finalSubArrs = []
    for (let i = 0; i < n; i++) {
        for (j = i; j < n; j++) {
            let subArr = []
            for (let k = i; k <= j; k++) {
                subArr.push(arr[k])
            }
            finalSubArrs.push(subArr)
        }
    }
    return finalSubArrs
}

console.log(getAllSubArray([1, 2, 3]))