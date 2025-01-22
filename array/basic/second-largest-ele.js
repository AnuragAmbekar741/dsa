// Second Largest Element in an Array
// Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

// Note: If the second largest element does not exist, return -1.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.


// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.


// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 there is no second largest element.



//Approach 1 - [Naive] - Using Sorting – O(n*logn) Time and O(1) Space


function secondLargestEle(arr) {
    const arrLen = arr.length
    arr.sort((a, b) => a - b)
    for (let i = arrLen - 2; i >= 0; i--) {
        if (arr[i] !== arr[arrLen - 1]) return arr[i];
    }
    return -1
}

// console.log(secondLargestEle([1, 5, 1]))

//Approach 2 - [Better Approach] Two Pass Search – O(n) Time and O(1) Space
//Solution - The approach is to traverse the array twice. In the first traversal, find the maximum element. In the second traversal, find the maximum element ignoring the one we found in the first traversal.

function getMax(arr, toIgnore) {
    const n = arr.length
    let max = 0
    for (i = 0; i <= n - 1; i++) {
        if (arr[i] > max && arr[i] != toIgnore) max = arr[i]
    }
    return max
}

function approachTwo(arr) {
    const max = getMax(arr)
    const secondMax = getMax(arr, max)
    return secondMax || -1
}
// console.log(approachTwo([1, 6, 5, 4, 2, 55, 3, 7, 6, 55, 7, 4, 3, 8, 9, 43, 51, 21, 100, 45, 66, 76, 23]))


//Approach 3 - [Expected Approach] One Pass Search – O(n) Time and O(1) Space
// The idea is to keep track of the largest and second largest element while traversing the array.Initialize largest and second largest with -1. Now, for any index i,
// If arr[i] > largest, update second largest with largest and largest with arr[i].
// Else If arr[i] < largest and arr[i] > second largest, update second largest with arr[i]. 

function appraochThree(arr) {
    let largest = -1
    let secondLargest = -1
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        }
        if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(appraochThree([1, 6, 5, 4, 2, 55, 3, 7, 6, 55, 7, 4, 3, 8, 9, 43, 51, 21, 100, 45, 66, 76, 23]))