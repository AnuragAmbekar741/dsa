
// with % operator
function prouctofArray(arr) {
    let n = arr.length;
    const arrProd = arr.reduce((acc, curr) => acc * curr, 1);
    const newArr = Array(n).fill(arrProd);
    return newArr.map((ele, i) => ele / arr[i]);
}

console.log(prouctofArray([1, 2, 3, 4])); // Output: 24