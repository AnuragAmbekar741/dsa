// Remove duplicates from Sorted Array

// Given a sorted array arr[] of size n, 
// the goal is to rearrange the array so that all distinct elements appear at the beginning in sorted order.
// Additionally, return the length of this distinct sorted subarray.

//Approach 1-  Using Hash Set – Works for Unsorted Also – O(n) Time and O(n) Space


function removeDuplicatesAndGetUniqueCount(arr) {
    const set = new Set()
    let eleCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) {
            set.add(arr[i])
            arr[eleCount++] = arr[i]
        }
    }
    return eleCount
}

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize = removeDuplicatesAndGetUniqueCount(arr);

console.log(arr.slice(0, newSize).join(' '));


//Approach 2 - Expected Approach – O(n) Time and O(1) Space

function removeDuplicates(arr) {
    const n = arr.length
    let eleCount = 1;

    for (let i = 1; i < n; i++) {
        if (arr[i] != arr[i - 1]) {
            arr[eleCount++] = arr[i]
        }
    }
    return eleCount
}

const arr2 = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 6, 9, 33, 55, 44, 44, 301];
const newSize2 = removeDuplicates(arr2);

console.log(arr2.slice(0, newSize2).join(' '));