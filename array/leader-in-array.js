// Leaders in an array
// Given an array arr[] of size n, the task is to find all the Leaders in the array.An element is a Leader if it is greater than or equal to all the elements to its right side.

// Note: The rightmost element is always a leader.

// Examples:

// Input: arr[] = [16, 17, 4, 3, 5, 2]
// Output: [17 5 2]
// Explanation: 17 is greater than all the elements to its right i.e., [4, 3, 5, 2], therefore 17 is a leader. 5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.

// Input: arr[] = [1, 2, 3, 4, 5, 2]
// Output: [5 2]
// Explanation: 5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.


// Approach - 1 [Naive Approach] Using Nested Loops – O(n ^ 2) Time and O(1) Space:
// Use two loops.The outer loop runs from 0 to size – 1 and one by one pick all elements from left to right.The inner loop compares the picked element to all the elements on its right side.If the picked element is greater than all the elements to its right side, then the picked element is the leader.

function leaderInArrAppOne(arr) {
    const result = []
    const n = arr.length
    for (let i = 0; i < n; i++) {
        let j
        for (j = i + 1; j < n; j++) {
            if (arr[i] < arr[j])
                break;
        }
        if (j === n)
            result.push(arr[i])
    }
    return result
}

// console.log(leaderInArrAppOne([1, 2, 3, 4, 5, 2]))

// Approach - 2 [Expected Approach] Using Suffix Maximum – O(n) Time and O(1) Space:
// The idea is to scan all the elements from right to left in an array and keep track of the maximum till now.When the maximum changes its value, add it to the result.Finally reverse the result 


function leadersInArrayAppTwo(arr) {
    const n = arr.length
    let currLeader = arr[n - 1]
    const result = [currLeader]
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > currLeader) {
            currLeader = arr[i]
            result.push(currLeader)
        }
    }
    return result.reverse()
}

console.log(leadersInArrayAppTwo([1, 2, 3, 4, 5, 2]))
