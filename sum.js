const findSum = (array) => {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + findSum(array.slice(1));
    }
}

console.log(findSum([1, 2, 3])); 
