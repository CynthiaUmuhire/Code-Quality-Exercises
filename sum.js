const findSum = (array, sum = 0) =>{
    if (array.length === 0) {
        return sum;
    } 
    return findSum(array.slice(1), sum + array[0])
}

console.log(findSum([1, 2, 3])); 
