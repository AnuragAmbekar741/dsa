// Move all zeros to end of array
// Given an array of integers arr[], the task is to move all the zeros to the end of the array while maintaining the relative order of all non - zero elements.

// [Better Approach] Two Traversals – O(n) Time and O(1) Space
function moveZerosToEnd(arr) {
    const n = arr.length
    let countOfNonZeroEle = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            arr[countOfNonZeroEle++] = arr[i]
        }
    }
    while (countOfNonZeroEle < n) {
        arr[countOfNonZeroEle++] = 0
    }
    return arr
}
// console.log(moveZerosToEnd([1, 5, 0, 6, 0, 4, 0, 2, 3]))

function moveZerosToEnd2(arr) {

}

