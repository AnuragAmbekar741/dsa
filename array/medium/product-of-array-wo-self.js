
// with % operator
function prouctofArray(arr) {
    let n = arr.length;
    const prodArr = arr.map(ele => arr.reduce((acc, val) => acc * val) / ele);
    return prodArr;
}


console.log(prouctofArray([1, 2, 3, 4])); // Output: 24

// o(n) without / operator
function productOfArrayWithoutSelf(arr) {
    let prefix = 1, postfix = 1

    const result = Array(arr.length).fill(1);

    for (let i = 0; i < arr.length; i++) {
        result[i] = prefix;
        prefix *= arr[i]
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= arr[i];
    }

    return result;
}
console.log(productOfArrayWithoutSelf([1, 2, 3, 4])); // Output: 24


