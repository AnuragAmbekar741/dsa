function reverseArray(arr) {
    const n = arr.length
    let left = 0;
    let right = n - 1

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}

// console.log(reverseArray([2, 4, 6, 3, 8, 5, 8]).join(" "))

function reverseArr(arr) {
    const n = arr.length
    let temp
    for (let i = 0; i < n / 2; i++) {
        temp = arr[i]
        arr[i] = arr[n - i - 1]
        arr[n - i - 1] = temp
    }
    return arr
}

console.log(reverseArr([2, 4, 6, 3, 8, 5, 8]).join(" "))
