// Largest three distinct elements in an array

// Given an array arr[], the task is to find the top three largest distinct integers present in the array.
// Note: If there are less than three distinct elements in the array, then return the available distinct numbers in descending order.


function topThreeLargestEle(arr) {

    const n = arr.lenght
    let first = -Infinity
    let second = -Infinity
    let third = -Infinity

    arr.forEach(ele => {
        if (ele > first) {
            third = second
            second = first
            first = ele
        }
        else if (ele > second && ele !== first) {
            third = second
            second = ele
        }
        else if (ele > third && ele !== second && ele !== first) {
            third = ele
        }
    });

    return [first, second, third].filter(ele => ele !== -Infinity)

}

console.log(topThreeLargestEle([12, 13, 1, 10, 34, 77, 21, 76, 1]))